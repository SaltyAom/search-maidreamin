import { ISortByOptions, IOrderOptions } from "./initState"

export interface IToggleFilter {
    type: "TOGGLE_FILTER",
}

export interface IUpdateSortBy {
    type: "UPDATE_SORT_BY",
    payload: {
        filter: {
            sortBy: ISortByOptions
        }
    }
}

export interface IUpdateOrderBy {
    type: "UPDATE_ORDER_BY",
    payload: {
        filter: {
            orderBy: IOrderOptions
        }
    }
}

type TAction = IToggleFilter | IUpdateSortBy | IUpdateOrderBy
export default TAction