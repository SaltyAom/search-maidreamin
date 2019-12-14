import { Dispatch } from "redux"

import IExchangeStore, { IUpdateServiceCharge } from "stores/types/reducers/exchange"

export interface IExchangeStoreAsComponent {
    store: IExchangeStoreAsProps
}

export interface IExchangeStoreAsProps {
    exchange: IExchangeStore
}

export interface IExchangeDispatchConnect {
    dispatch: {
        updateServiceCharge(serviceCharge: boolean): Dispatch<IUpdateServiceCharge>,
    }
}

export interface IExchangeDispatch {
    updateServiceCharge: Dispatch<IUpdateServiceCharge>,
}

export type TExchangeDispatch = IUpdateServiceCharge

export default interface IExchange {
    store: IExchangeStoreAsProps,
    dispatch: IExchangeDispatch
}