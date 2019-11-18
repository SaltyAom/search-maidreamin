import { Dispatch } from "redux"

import { ISortByOptions, IOrderOptions } from "stores/types/initState"
import  { IUpdateSortBy, IUpdateOrderBy } from "stores/types/action"

export interface IFilterStore {
    store: IFilterStoreAsProps
}

export interface IFilterStoreAsProps {
    filter: {
        isOpen: boolean,
        sortBy: ISortByOptions,
        orderBy: IOrderOptions
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