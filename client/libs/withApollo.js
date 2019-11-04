import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"

import { HttpLink } from "apollo-link-http"

import withApollo from "next-with-apollo"
import fetch from "node-fetch"

import { isDev } from 'libs/helpers'

let link = isDev
	? new HttpLink({
			uri: "http://localhost:8080",
			fetch: fetch,
			fetchPolicy: 'cache-and-network'
	  })
	: new HttpLink({
			uri: "https://apollo-search-maidreamin.now.sh",
			fetch: fetch,
			fetchPolicy: 'cache-and-network'

	  })

export default withApollo(
	({ ctx, headers, initialState }) =>
		new ApolloClient({
			link,
			cache: new InMemoryCache().restore(initialState || {}),
			ssrMode: true,
			queryDeduplication: true,
			defaultOptions: {
				watchQuery: {
					fetchPolicy: "cache-and-network"
				}
			},
			ssrForceFetchDelay: 300,
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
		},
		{
			getDataFromTree: "ssr"
		})
)
