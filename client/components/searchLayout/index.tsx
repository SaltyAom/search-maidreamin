import React, { Fragment, memo, SFC } from "react"
import Head from "next/head"

import Fab from "components/fab"

import ISearchLayout from "./types"

import "./search-layout.styl"

const SearchLayout: SFC<ISearchLayout> = memo((props: ISearchLayout) => {
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
						src="/img/search.svg"
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
})

export default SearchLayout
