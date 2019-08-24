import App, { Container } from "next/app"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "@apollo/react-hooks"
import fetch from "node-fetch"

import "stylus/init.styl"

let cache = new InMemoryCache()

/*
let link = createPersistedQueryLink().concat(
	createHttpLink({
		uri: "https://apollo-search-maidreamin.now.sh",
		fetch: fetch
	})
)
*/
let link = new HttpLink({
	uri: "https://apollo-search-maidreamin.now.sh",
	fetch: fetch,
})

let client = new ApolloClient({
	cache,
	link
})

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props

		return (
			<ApolloProvider client={client}>
				<Container>
					<Component {...pageProps} />
				</Container>
			</ApolloProvider>
		)
	}
}

export default MyApp
