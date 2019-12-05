import React, { Fragment, memo, FC } from "react"

import Head from "next/head"

import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { guideSelector } from 'stores/selectors'

import MaterialButton from "@material/react-button"

import Filter from "components/filter"

import ISearchLayout, { ISearchLayoutProps } from "./types"
import { IToggleFilter } from "stores/types/action"

import "./search-layout.styl"
import "@material/react-button/dist/button.css"

const mapStateToProps = (state, ownProps: ISearchLayoutProps) => ({
	store: {
		guide: guideSelector(state)
	},
	props: ownProps
})

const mapDispatchToProps = (dispatch: Dispatch<IToggleFilter>) => ({
	dispatch: {
		toggleFilter: () => dispatch({
			type: "TOGGLE_FILTER"
		})
	}
})

export const SearchLayout: FC<ISearchLayout> = memo(({ props, dispatch }: ISearchLayout) => {
	let { onChange, children } = props,
		{ toggleFilter } = dispatch

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
					<MaterialButton
						id="search-sort"
						onClick={() => toggleFilter()}
						icon={
							<img
								id="search-sort-icon"
								src="/img/notes.svg"
								alt="Sort"
							/>
						}
					>
						Sort
					</MaterialButton>
				</header>
				<Filter />
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