export type ISortByOptions = "group" | "name" | "price"
export type IOrderOptions = "ascending" | "descending"

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

export type TFilterAction = IUpdateSortBy | IUpdateOrderBy
export default interface IFilterState {
    sortBy: ISortByOptions
    orderBy: IOrderOptions
}