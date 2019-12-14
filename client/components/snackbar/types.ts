import { IMenu } from 'pageTypes/index'

export interface ISnackbarStore {
    store: ISnackbarStoreAsProps
}

export interface ISnackbarStoreAsProps {
    order: Array<IMenu>
}

export interface ISnackbarStoreAsProps {
}

export interface ISnackbarInfo extends IMenu {
    type: "added" | "removed"
}

export default interface ISnackbar {
	store: ISnackbarStoreAsProps
}