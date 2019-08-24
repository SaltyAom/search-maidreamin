/* Apollo */
const { ApolloServer } = require("apollo-server-express")
const { MemcachedCache } = require("apollo-server-cache-memcached")

/* Server */
const express = require("express")
const app = express()
const cors = require("cors")

/* Apollo config */
const typeDefs = require("./graphql/schema")
const resolvers = require("./graphql/resolvers")

const MaidreaminAPI = require("./graphql/dataSources/maidreamin.js")

/* Config */
const dev = process.env.NODE_ENV !== "production"

/* Apollo */
const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		MaidreaminAPI: new MaidreaminAPI()
	}),
	persistedQueries: {
		cache: new MemcachedCache(
			["memcached-server-1", "memcached-server-2", "memcached-server-3"],
			{ retries: 10, retry: 10000 }
		)
	},
	engine: {
		apiKey: "service:maidreamin-search:ItERbd2CFwr_jd3ADIXuqQ"
	},
	introspection: dev,
	playground: dev,
	tracing: !dev,
	cacheControl: true
})

/* Server config */
let corsOptions

dev
	? (corsOptions = {
			origin: "*"
	  })
	: (corsOptions = {
			origin: "https://search-maidreamin.now.sh"
	  })

app.use(cors(corsOptions))
server.applyMiddleware({
	app,
	path: "/",
	cors: false // Disable Apollo CORs default options
})

app.listen({ port: 8080 }, () => {
	console.log(`Listen on port :8080 desu!`)
})
