import React, { Fragment } from "react"
import Head from "next/head"

import "./search-layout.styl"

const SearchLayout = props => {
	let { onChange, value, children } = props

	return (
		<Fragment>
			<Head>
				<title>Search Maidreamin Menu</title>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-title"
					content="Maidreamin Menu"
				/>
				<link rel="apple-touch-icon" href="/static/app/icon.jpg" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="default"
				/>
				<meta name="format-detection" content="telephone=no" />
				<meta name="apple-touch-fullscreen" content="yes" />
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation:portrait)"
					href="static/appsplash/iPhoneX.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation:landscape)"
					href="static/appsplash/iPhoneXL.png"
				/>

				<link
					rel="apple-touch-startup-image"
					media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
					href="static/appsplash/iPhone.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
					href="static/appsplash/iPhoneL.png"
				/>

				<link
					rel="apple-touch-startup-image"
					media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation:portrait)"
					href="static/appsplash/iPhone.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation:landscape)"
					href="static/appsplash/iPhoneL.png"
				/>

				<link
					rel="apple-touch-startup-image"
					media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
					href="static/appsplash/iPhoneSE.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
					href="static/appsplash/iPhoneSEL.png"
				/>

				<link
					rel="apple-touch-startup-image"
					media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
					href="static/appsplash/iPad.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
					href="static/appsplash/iPadL.png"
				/>

				<link
					rel="apple-touch-startup-image"
					media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
					href="static/appsplash/iPadLarge.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
					href="static/appsplash/iPadLargeL.png"
				/>

				<link
					rel="apple-touch-startup-image"
					media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
					href="static/appsplash/iPadPro.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
					href="static/appsplash/iPadProL.png"
				/>

				<link
					rel="apple-touch-startup-image"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait)"
					href="static/appsplash/iPhoneXR.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation:landscape)"
					href="static/appsplash/iPhoneXRL.png"
				/>

				<link
					rel="apple-touch-startup-image"
					media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation:portrait)"
					href="static/appsplash/iPhoneX.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation:landscape)"
					href="static/appsplash/iPhoneXL.png"
				/>

				<link
					rel="apple-touch-startup-image"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation:portrait)"
					href="static/appsplash/iPhoneXSMax.png"
				/>
				<link
					rel="apple-touch-startup-image"
					media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation:landscape)"
					href="static/appsplash/iPhoneXSMaxL.png"
				/>
			</Head>
			<div id="landing">
				<div id="search">
					<img
						id="search-icon"
						src="/static/img/search.svg"
						alt="Search Icon"
					/>
					<input
						id="search-input"
						name="search"
						aria-label="Search"
						placeholder="Search menu"
						onChange={event => onChange(event)}
						value={value}
						autoComplete="off"
					/>
				</div>
				{children}
			</div>
		</Fragment>
	)
}

export default SearchLayout
