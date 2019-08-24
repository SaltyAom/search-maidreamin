import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import withApollo from 'next-with-apollo'
import fetch from "node-fetch"

import "stylus/init.styl"

const dev = process.env.NODE_ENV !== "production"

let link = dev
	? new HttpLink({
			uri: "http://localhost:8080",
			fetch: fetch
	  })
	: new HttpLink({
			uri: "https://apollo-search-maidreamin.now.sh",
			fetch: fetch
	  })

export default withApollo(
	({ ctx, headers, initialState }) =>
		new ApolloClient({
			link,
			cache: new InMemoryCache().restore(initialState || {})
		})
)
