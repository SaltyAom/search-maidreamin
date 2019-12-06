import { IMenu } from "pageTypes/index"

import IExchangeStore from "stores/types/reducers/exchange"

export interface ITableStore {
    exchange: IExchangeStore
}

export interface ITableOwnProps {
    data: Array<IMenu>
}

export default interface ITable {
    store: ITableStore
    props: ITableOwnProps
}