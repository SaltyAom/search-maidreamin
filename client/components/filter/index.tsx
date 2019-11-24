import { memo, FC } from "react"

import { Dispatch } from "redux"
import { connect } from "react-redux"

import FilterSelect from "components/filterSelect"

import IInitState from "stores/types/initState"
import IFilter, { IFilterStore, TFilterDispatch } from "./types"

import "./filter.styl"

const mapStateToProps = (state: IInitState): IFilterStore => ({
	store: {
		filter: state.filter
	}
})

const mapDispatchToProps = (dispatch: Dispatch<TFilterDispatch>) => ({
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

const Filter: FC<IFilter> = memo(({ store, dispatch }: IFilter) => {
	let { filter } = store,
		{ isOpen, sortBy, orderBy } = filter,
		{ updateSortBy, updateOrderBy } = dispatch

	if (!isOpen) return <form id="filter" className="hidden" />

	let sortOptions = ["group", "name", "price"],
		orderOptions = ["ascending", "descending"]

	return (
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
	)
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
