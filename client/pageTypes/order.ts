import IOrderState from 'stores/types/reducers/order'

export interface IOrderStore {
    order: IOrderState
}

export interface IOrderStoreConnect {
    store: IOrderStore
}

export interface IOrderProps {
    store: IOrderStore
}