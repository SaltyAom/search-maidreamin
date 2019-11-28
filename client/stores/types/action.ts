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

export interface IUpdateGuide {
    type: "UPDATE_GUIDE",
    payload: {
        guide: {
            isActive: boolean
        }
    }
}

type TAction = IToggleFilter | IUpdateSortBy | IUpdateOrderBy | IUpdateSortBy | IUpdateGuide
export default TAction