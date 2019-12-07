export type TSortByOptions = "group" | "name" | "price"
export type TOrderByOptions = "ascending" | "descending"

export interface IUpdateSortBy {
	type: "UPDATE_SORT_BY"
	payload: {
		filter: {
			sortBy: TSortByOptions
		}
	}
}

export interface IUpdateOrderBy {
	type: "UPDATE_ORDER_BY"
	payload: {
		filter: {
			orderBy: TOrderByOptions
		}
	}
}

export type TFilterAction = IUpdateSortBy | IUpdateOrderBy
export default interface IFilterState {
    sortBy: TSortByOptions
    orderBy: TOrderOptions
}