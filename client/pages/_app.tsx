import App from "next/app"

import * as Sentry from "@sentry/browser"

import { ApolloProvider } from "@apollo/react-hooks"
import withApollo from "libs/withApollo"

import { isServer } from 'libs/helpers'

import ErrorBoundary from "components/ErrorBoundary"

Sentry.init({
	dsn: "https://e1604c844b8d49c7a052c426ac77ab8b@sentry.io/1806051"
})

import "stylus/init.styl"

class MaidreaminSearch extends App<any, {}> {
	componentDidMount() {
		document.addEventListener("touchstart", () => null)

		if (
			"serviceWorker" in navigator &&
			process.env.NODE_ENV === "production" &&
			!isServer
		) {
			window.addEventListener("load", () => {
				navigator.serviceWorker.register(
					"/_next/static/service-worker.js",
					{ scope: "/" }
				)
			})
		}
	}

	componentDidCatch(error, errorInfo) {
		Sentry.withScope(scope => {
			Object.keys(errorInfo).forEach(key => {
				scope.setExtra(key, errorInfo[key])
			})

			Sentry.captureException(error)
		})

		super.componentDidCatch(error, errorInfo)
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
