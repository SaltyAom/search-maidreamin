/* Apollo */
const { ApolloServer } = require("apollo-server-express")
const { MemcachedCache } = require("apollo-server-cache-memcached")

/* Server */
const express = require("express")
const app = express()
const cors = require("cors")
const apicache = require("apicache")
const bodyparser = require("body-parser")

const cache = apicache.middleware

/* Apollo config */
const typeDefs = require("./graphql/schema")
const resolvers = require("./graphql/resolvers")

const MaidreaminAPI = require("./graphql/dataSources/maidreamin.js")

/* Config */
const dev = process.env.NODE_ENV !== "production"

app.use(bodyparser.json({ limit: '1mb' }))
app.use(cache('5 minutes'))
apicache.options({
	appendKey: (req, res) => req.body.operationName + JSON.stringify(req.body.variables)
})

/* Apollo */
const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		MaidreaminAPI: new MaidreaminAPI()
	}),
	engine: {
		apiKey: "service:maidreamin-search:ItERbd2CFwr_jd3ADIXuqQ"
	},
	introspection: true, // dev
	playground: true, // dev
	tracing: true, // !dev
	cacheControl: true
})

/* Server config */
let corsOptions = { 
	origin: "*" 
}

app.use(cors(corsOptions))
server.applyMiddleware({
	app,
	path: "/",
	cors: false // Disable Apollo CORs default options
})

app.listen({ port: 8080 }, () => {
	console.log(`Listen on port :8080 desu!`)
})
