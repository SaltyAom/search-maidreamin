export interface IUtilityStore {
    store: IUtilityStoreAsProps
}

export interface IUtilityStoreAsProps {
    guide: {
        isActive: boolean,
        version: number
    }
}

export default interface IUtility {
    store: IUtilityStoreAsProps,
    props: any
}