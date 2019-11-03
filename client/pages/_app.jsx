import App from "next/app"
import dynamic from 'next/dynamic'

import * as Sentry from '@sentry/browser'

import { ApolloProvider } from "@apollo/react-hooks"
import withApollo from "libs/withApollo"

import ErrorBoundary from "components/ErrorBoundary"

Sentry.init({dsn: "https://e1604c844b8d49c7a052c426ac77ab8b@sentry.io/1806051"});

import "stylus/init.styl"

class MaidreaminSearch extends App {
	componentDidMount(){
		document.addEventListener("touchstart", () => null)
	}
	
    componentDidCatch(error, errorInfo) {
        Sentry.withScope((scope) => {
            Object.keys(errorInfo).forEach((key) => {
                scope.setExtra(key, errorInfo[key]);
            });

            Sentry.captureException(error);
        });

        super.componentDidCatch(error, errorInfo);
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