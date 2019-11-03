import App from "next/app"
import dynamic from 'next/dynamic'

import { ApolloProvider } from "@apollo/react-hooks"
import withApollo from "libs/withApollo"

import ErrorBoundary from "components/ErrorBoundary"

import "stylus/init.styl"

class MaidreaminSearch extends App {
	componentDidMount(){
		document.addEventListener("touchstart", () => null)
	}

	render() {
		const { Component, pageProps, apollo } = this.props

		return (
			<ApolloProvider client={apollo}>
				<ErrorBoundary>
					<Component {...pageProps} />
				</ErrorBoundary>
			</ApolloProvider>
		)
	}
}

export default withApollo(MaidreaminSearch)