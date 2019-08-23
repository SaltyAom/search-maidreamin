import React, { Fragment } from "react"
import Head from "next/head"

import Fab from "components/fab"

import "./search-layout.styl"

const SearchLayout = props => {
	let { onChange, value, children } = props

	return (
		<Fragment>
			<Head>
				<title>Search Maidreamin Menu</title>
			</Head>
			<div id="landing">
				<Fab />
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
