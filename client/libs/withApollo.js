import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"

import { HttpLink, createHttpLink } from "apollo-link-http"
import { createPersistedQueryLink } from "apollo-link-persisted-queries"

import withApollo from "next-with-apollo"
import fetch from "node-fetch"

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
			cache: new InMemoryCache().restore(initialState || {}),
			ssrMode: true,
			cacheRedirects: {
				Query: {
					getMenu: (_, args, { getCacheKey }) =>
						args.price.map(price =>
							getCacheKey({
								__typename: "Menu",
								name: {
									th: args.name.th,
									en: args.name.en,
									jp: args.name.jp
								},
								subMenu: args.subMenu,
								price: price
							})
						),
					getMenuBy: (_, args, { getCacheKey }) =>
						args.name.map(price =>
							getCacheKey({
								__typename: "Menu",
								name: {
									th: args.name.th,
									en: args.name.en,
									jp: args.name.jp
								},
								subMenu: args.subMenu,
								price: price
							})
						)
				}
			}
		})
)
