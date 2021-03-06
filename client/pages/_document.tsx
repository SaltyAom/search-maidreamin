/* Next */
import Document, { Html, Head, Main, NextScript } from "next/document"

/* Page */
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* Init */}
					<meta
						httpEquiv="content-type"
						content="text/html, charset=utf8"
					/>
					<meta
						httpEquiv="X-UA-Compatible"
						content="IE=edge,chrome=1"
					/>

					{/* SEO */}
					<meta name="title" content="Search Dreamin" />
					<meta
						name="description"
						content="Search menu from Maidreamin MBK with Maidreamin API"
					/>
					<meta
						name="keywords"
						content="Maidreamin, menu, search maidreamin, get maidreamin menu, search maidreamin menu"
					/>
					<meta name="author" content="SaltyAom" />
					<link rel="icon" href="/app/icon/iconXDisplay.png" />

					{/* Open Graph */}
					<meta
						property="og:title"
						content="Search Dreamin"
					/>
					<meta
						property="og:description"
						content="Search menu from Maidreamin MBK with Maidreamin API"
					/>
					<meta
						property="og:tags"
						content="Maidreamin, menu, search maidreamin, get maidreamin menu, search maidreamin menu"
					/>
					<meta property="article:author" content="SaltyAom" />
					<meta
						property="og:site_name"
						content="Search Dreamin"
					/>
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta
						property="og:image"
						content="https://search-dreamin.now.sh/img/cover.jpg"
					/>
					<meta property="og:image:width" content="1920" />
					<meta property="og:image:height" content="1080" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta
						name="twitter:title"
						content="Search Dreamin"
					/>
					<meta
						name="twitter:description"
						content="Search menu from Maidreamin MBK with Maidreamin API"
					/>
					<meta name="twitter:site" content="@SaltyAom" />
					<meta
						name="twitter:image"
						content="https://search-dreamin.now.sh/img/cover.jpg"
					/>
					<meta name="twitter:creator" content="@SaltyAom" />

					{/* Web App */}
					<link rel="manifest" href="/app/manifest.json" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="theme-color" content="#ffffff" />
					<meta
						name="application-name"
						content="Search Dreamin"
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

					{/* Apple Web app */}
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-title"
						content="Dreamin"
					/>
					<link rel="apple-touch-icon" href="/app/icon/iconX256.jpg" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="format-detection" content="telephone=no" />
					<meta name="apple-touch-fullscreen" content="yes" />

					<link
						rel="apple-touch-startup-image"
						media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation:portrait)"
						href="/app/splash/iPhoneX.png"
					/>
					<link
						rel="apple-touch-startup-image"
						media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation:landscape)"
						href="/app/splash/iPhoneXL.png"
					/>

					<link
						rel="apple-touch-startup-image"
						media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
						href="/app/splash/iPhone.png"
					/>
					<link
						rel="apple-touch-startup-image"
						media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
						href="/app/splash/iPhoneL.png"
					/>

					<link
						rel="apple-touch-startup-image"
						media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation:portrait)"
						href="/app/splash/iPhone.png"
					/>
					<link
						rel="apple-touch-startup-image"
						media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation:landscape)"
						href="/app/splash/iPhoneL.png"
					/>

					<link
						rel="apple-touch-startup-image"
						media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
						href="/app/splash/iPhoneSE.png"
					/>
					<link
						rel="apple-touch-startup-image"
						media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
						href="/app/splash/iPhoneSEL.png"
					/>

					<link
						rel="apple-touch-startup-image"
						media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
						href="/app/splash/iPad.png"
					/>
					<link
						rel="apple-touch-startup-image"
						media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
						href="/app/splash/iPadL.png"
					/>

					<link
						rel="apple-touch-startup-image"
						media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
						href="/app/splash/iPadLarge.png"
					/>
					<link
						rel="apple-touch-startup-image"
						media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
						href="/app/splash/iPadLargeL.png"
					/>

					<link
						rel="apple-touch-startup-image"
						media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
						href="/app/splash/iPadPro.png"
					/>
					<link
						rel="apple-touch-startup-image"
						media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
						href="/app/splash/iPadProL.png"
					/>

					<link
						rel="apple-touch-startup-image"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
						href="/app/splash/iPhoneXR.png"
					/>
					<link
						rel="apple-touch-startup-image"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
						href="/app/splash/iPhoneXRL.png"
					/>

					<link
						rel="apple-touch-startup-image"
						media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation:portrait)"
						href="/app/splash/iPhoneX.png"
					/>
					<link
						rel="apple-touch-startup-image"
						media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation:landscape)"
						href="/app/splash/iPhoneXL.png"
					/>

					<link
						rel="apple-touch-startup-image"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation:portrait)"
						href="/app/splash/iPhoneXSMax.png"
					/>
					<link
						rel="apple-touch-startup-image"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation:landscape)"
						href="/app/splash/iPhoneXSMaxL.png"
					/>
					{/* Pre */}
					<link
						rel="preconnect"
						href="https://apollo-search-maidreamin.now.sh/"
					/>
					{/* Google Search */}
					<meta
						name="google-site-verification"
						content="a3Jdp2uVvAUeZ0TuPl7GNxo1CZT9pa90nLBZ15sIaA0"
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
