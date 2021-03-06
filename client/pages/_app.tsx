import { Fragment } from 'react'

import Head from "next/head"

import App from "next/app"

import { Provider } from "react-redux"
import { store, persistor } from "stores"
import { PersistGate } from "redux-persist/integration/react"

import * as Sentry from "@sentry/browser"

import { ApolloProvider } from "@apollo/react-hooks"
import withApollo from "libs/withApollo"

import { isServer, isDev } from "libs/helpers"

import ErrorBoundary from "components/ErrorBoundary"
import UtilityLayout from "layouts/utilityLayout"

import "stylus/init.styl"

if (!isDev)
	Sentry.init({
		dsn: "https://e1604c844b8d49c7a052c426ac77ab8b@sentry.io/1806051"
	})

class MaidreaminSearch extends App<any, {}> {
	componentDidMount() {
		document.addEventListener("touchstart", () => null, false)

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
		if (isDev) return

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
			<Fragment>
				<Head>
					<meta
						name="viewport"
						key="viewport"
						content="width=device-width,initial-scale=1.0,viewport-fit=cover,user-scalable=no"
					/>
				</Head>
				<ApolloProvider client={apollo}>
					<Provider store={store}>
						<PersistGate loading={(
							<UtilityLayout rehydrated={false}>
								<ErrorBoundary>
									<Component {...pageProps} />
								</ErrorBoundary>
							</UtilityLayout>
						)} persistor={persistor}>
							<UtilityLayout>
								<ErrorBoundary>
									<Component {...pageProps} />
								</ErrorBoundary>
							</UtilityLayout>
						</PersistGate>
					</Provider>
				</ApolloProvider>
			</Fragment>
		)
	}
}

export default withApollo(MaidreaminSearch)
