import { ReactNode } from 'react'

export interface IUtilityStore {
    guide: {
        isActive: boolean,
        version: number
    }
}

export interface IUtilityOwnProps {
    children: ReactNode
}

export interface IUtilityStoreConnect {
    store: IUtilityStore
    props: IUtilityOwnProps
}

export default interface IUtility {
    store: IUtilityStore
    props: IUtilityOwnProps
}