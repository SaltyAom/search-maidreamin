export type ISortByOptions = "group" | "name" | "price"
export type IOrderOptions = "ascending" | "descending"

export interface IToggleFilter {
	type: "TOGGLE_FILTER"
}

export interface IUpdateSortBy {
	type: "UPDATE_SORT_BY"
	payload: {
		filter: {
			sortBy: ISortByOptions
		}
	}
}

export interface IUpdateOrderBy {
	type: "UPDATE_ORDER_BY"
	payload: {
		filter: {
			orderBy: IOrderOptions
		}
	}
}

export type TFilterAction = IToggleFilter | IUpdateSortBy | IUpdateOrderBy
export default interface IFilterState {
    isOpen: boolean
    sortBy: ISortByOptions
    orderBy: IOrderOptions
}