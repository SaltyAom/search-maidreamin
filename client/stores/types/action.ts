import { IMenu } from "pageTypes/index"
import { TSortByOptions, TOrderByOptions } from "./initState"

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

export interface IUpdateGuide {
	type: "UPDATE_GUIDE"
	payload: {
		guide: {
			isActive: boolean
		}
	}
}

export interface IAddOrder {
	type: "ADD_ORDER"
	payload: {
		order: IMenu
	}
}

export interface IRemoveOrder {
	type: "REMOVE_ORDER"
	payload: {
		index: number
	}
}

type TAction =
	| IUpdateSortBy
	| IUpdateOrderBy
	| IUpdateSortBy
	| IUpdateGuide
	| IAddOrder
	| IRemoveOrder
export default TAction
