/* Next */
import Document, { Html, Head, Main, NextScript } from "next/document"

/* Page */
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						httpEquiv="content-type"
						content="text/html, charset=utf8"
					/>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1"
					/>
					<meta
						httpEquiv="X-UA-Compatible"
						content="IE=edge,chrome=1"
					/>
					<meta name="title" content="Search Maidreamin Menu" />
					<meta
						name="description"
						content="Search menu from Maidreamin MBK with Maidreamin API"
					/>
					<meta
						name="keywords"
						content="Maidreamin, menu, search maidreamin, get maidreamin menu, search maidreamin menu"
					/>
					<meta name="author" content="aomkirby123" />
					<link rel="icon" href="/static/app/icon/iconX192.png" />
					<meta
						property="og:title"
						content="Search Maidreamin Menu"
					/>
					<meta
						property="og:description"
						content="Search menu from Maidreamin MBK with Maidreamin API"
					/>
					<meta
						property="og:tags"
						content="Maidreamin, menu, search maidreamin, get maidreamin menu, search maidreamin menu"
					/>
					<meta property="article:author" content="aomkirby123" />
					<meta
						property="og:site_name"
						content="Search Maidreamin Menu"
					/>
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta
						property="og:image"
						content="https://search-maidreamin.now.sh/static/img/cover.jpg"
					/>
					<meta property="og:image:width" content="1920" />
					<meta property="og:image:height" content="1080" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta
						name="twitter:title"
						content="Search Maidreamin Menu"
					/>
					<meta
						name="twitter:description"
						content="Search menu from Maidreamin MBK with Maidreamin API"
					/>
					<meta name="twitter:site" content="@aomkirby1231" />
					<meta
						name="twitter:image"
						content="https://search-maidreamin.now.sh/static/img/cover.jpg"
					/>
					<meta name="twitter:creator" content="@aomkirby1231" />
					<link rel="manifest" href="static/app/manifest.json" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="theme-color" content="#ffffff" />
					<meta
						name="application-name"
						content="Search Maidreamin Menu"
					/>
					<meta name="mssmarttagspreventparsing" content="true" />
					<meta
						name="msapplication-window"
						content="width=800;height=600"
					/>
					<meta
						name="msapplication-navbutton-color"
						content="#ffffff"
					/>
					<meta
						name="msapplication-tooltip"
						content="Search menu from Maidreamin MBK with Maidreamin API."
					/>
					<link
						rel="preconnect"
						href="https://maidreamin.now.sh/menu"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
