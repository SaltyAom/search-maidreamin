import { Fragment, FC, useState } from "react"

import { connect } from "react-redux"
import { filterSelector } from 'stores/selectors'

import FilterSelect from "components/filterSelect"

import IInitState from "stores/types/initState"
import IFilter, { IFilterStore, IFilterDispatchConnect } from "./types"

import MaterialButton from '@material/react-button'

import "./filter.styl"

const mapStateToProps = (state: IInitState): IFilterStore => ({
	store: {
		filter: filterSelector(state)
	}
})

const mapDispatchToProps = (dispatch): IFilterDispatchConnect => ({
	dispatch: {
		updateSortBy: nextSort =>
			dispatch({
				type: "UPDATE_SORT_BY",
				payload: {
					filter: {
						sortBy: nextSort
					}
				}
			}),
		updateOrderBy: nextOrder =>
			dispatch({
				type: "UPDATE_ORDER_BY",
				payload: {
					filter: {
						orderBy: nextOrder
					}
				}
			})
	}
})

const Filter: FC<IFilter> = ({ store, dispatch }) => {
	let { filter } = store,
		{ sortBy, orderBy } = filter,
		{ updateSortBy, updateOrderBy } = dispatch

	let [ isOpen, setOpen ] = useState(false)

	if (!isOpen) return (
		<Fragment>
			<MaterialButton
				id="search-sort"
				onClick={() => setOpen(!isOpen)}
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
			<form id="filter" className="hidden" />
		</Fragment>
	)

	let sortOptions = ["group", "name", "price"],
		orderOptions = ["ascending", "descending"]

	return (
		<Fragment>
			<MaterialButton
				id="search-sort"
				onClick={() => setOpen(!isOpen)}
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
			<form id="filter" onSubmit={event => event.preventDefault()}>
				<div className="sort">
					{sortOptions.map(option => (
						<FilterSelect
						key={option}
						name={option}
						sortBy={sortBy}
						callback={(newSort) => updateSortBy(newSort)}
						/>
					))}
				</div>
				<div className="order">
					{orderOptions.map(option => (
						<FilterSelect
							key={option}
							name={option}
							sortBy={orderBy}
							callback={(newOrder) => updateOrderBy(newOrder)}
						/>
					))}
				</div>
			</form>
		</Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
