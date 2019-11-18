import React, { Fragment, memo, SFC } from "react"

import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import Head from "next/head"

import MaterialButton from "@material/react-button"

import Fab from "components/fab"
import Filter from "components/filter"

import ISearchLayout, { ISearchLayoutProps } from "./types"
import { IToggleFilter } from "stores/types/action"

import "./search-layout.styl"
import "@material/react-button/dist/button.css"

const mapStateToProps = (state, ownProps: ISearchLayoutProps) => ({
	props: ownProps
})

const mapDispatchToProps = (dispatch: Dispatch<IToggleFilter>) => ({
	dispatch: {
		toggleFilter: () => dispatch({
			type: "TOGGLE_FILTER"
		})
	}
})

const SearchLayout: SFC<ISearchLayout> = memo(({ props, dispatch }: ISearchLayout) => {
	let { onChange, children } = props,
		{ toggleFilter } = dispatch

	let emptySearchInput = () => {
		let search = document.getElementById("search-input") as HTMLInputElement
		search.value = null

		let event = {
			target: {
				value: ""
			}
		}

		return onChange(event)
	}

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
						autoComplete="off"
						required
					/>
					<img
						id="search-remove"
						src="/img/highlight_off.svg"
						alt="Remove Search"
						onClick={() => emptySearchInput()}
						role="submit"
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
				{children}
			</div>
		</Fragment>
	)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchLayout)