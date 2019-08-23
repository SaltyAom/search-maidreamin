/* Apollo */
const { ApolloServer } = require("apollo-server-express")
const { MemcachedCache } = require("apollo-server-cache-memcached")

/* Server */
const express = require("express")
const app = express()
const next = require("next")

/* Utilities */
const dev = process.env.NODE_ENV !== "production"
const nextServer = next({ dev })
const handle = nextServer.getRequestHandler()
const compression = require("compression")
const cacheableResponse = require("cacheable-response")

let ssrCache

if (dev) {
	ssrCache = cacheableResponse({
		ttl: 0,
		get: async ({ req, res, pagePath, queryParams }) => ({
			data: await nextServer.renderToHTML(req, res, pagePath, queryParams)
		}),
		send: ({ data, res }) => res.send(data)
	})
} else {
	ssrCache = cacheableResponse({
		ttl: 1000 * 60 * 60, // 1hour
		get: async ({ req, res, pagePath, queryParams }) => ({
			data: await nextServer.renderToHTML(req, res, pagePath, queryParams)
		}),
		send: ({ data, res }) => res.send(data)
	})
}

/* Apollo config */
const typeDefs = require("./graphql/schema")
const resolvers = require("./graphql/resolvers")

const MaidreaminAPI = require("./graphql/dataSources/maidreamin.js")

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
	introspection: true,
	playground: true,
	tracing: true,
	cacheControl: true
})

server.applyMiddleware({ app })

/* Server */
nextServer.prepare().then(() => {
	app.use(compression())

    app.get("/test", (req, res) => {
        res.send("Test")
    })

	/* Route */
	app.get("/", (req, res) => {
		ssrCache({ req, res, pagePath: "/" })
	})

	app.get("*", (req, res) => {
		handle(req, res)
	})

	/* Listen */
	app.listen({ port: 8080 }, () => {
		console.log(`Listen on port :8000 desu!`)
	})
})
