import React, { Fragment, FC, memo } from "react"

import Head from "next/head"

import { connect } from 'react-redux'
import { guideSelector } from 'stores/selectors'

import Filter from "components/filter"

import IInitState from "stores/types/initState"
import ISearchLayout, { ISearchLayoutProps } from "./types"

import "./search-layout.styl"
import "@material/react-button/dist/button.css"

const mapStateToProps = (state: IInitState, ownProps: ISearchLayoutProps) => ({
	store: {
		guide: guideSelector(state)
	},
	props: ownProps
})

const mapDispatchToProps = null

export const SearchLayout: FC<ISearchLayout> = memo(({ props }) => {
	let { onChange, children } = props

	let emptySearchInput = () => {
		let search = document.getElementById("search-input") as HTMLInputElement
		search.value = null

		return onChange({
			target: {
				value: ""
			}
		})
	}

	return (
		<Fragment>
			<Head>
				<title>Search Dreamin</title>
			</Head>
			<div id="landing">
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
						autoComplete="off"
						required
					/>
					<img
						id="search-remove"
						src="/img/highlight_off.svg"
						alt="Remove Search"
						onClick={() => emptySearchInput()}
						role="button"
					/>
				</div>
				<header id="search-tools">
					<Filter />
				</header>
				<main id="result">
					{children}
				</main>
			</div>
		</Fragment>
	)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchLayout)