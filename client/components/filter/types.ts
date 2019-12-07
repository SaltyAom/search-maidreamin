import { Dispatch } from "redux"

import { TSortByOptions, TOrderByOptions } from "stores/types/initState"
import  { IUpdateSortBy, IUpdateOrderBy } from "stores/types/action"

export interface IFilterStore {
    store: IFilterStoreAsProps
}

export interface IFilterStoreAsProps {
    filter: {
        sortBy: TSortByOptions,
        orderBy: TOrderByOptions
    }
}

export interface IFilterDispatchConnect {
    dispatch: {
        updateSortBy(nextSort: TSortByOptions): Dispatch<IUpdateSortBy>
        updateOrderBy(next: TOrderByOptions): Dispatch<IUpdateOrderBy>
    }
}

export interface IFilterDispatch {
    updateSortBy: Dispatch<IUpdateSortBy>,
    updateOrderBy: Dispatch<IUpdateOrderBy>
}

export type TFilterDispatch = IUpdateOrderBy | IUpdateSortBy

export default interface IFilter {
    store: IFilterStoreAsProps,
    dispatch: IFilterDispatch
}