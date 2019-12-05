import { IMenu } from 'pageTypes/index'

export interface ISnackbarStore {
    order: Array<IMenu>
}

export default interface ISnackbar {
	store: ISnackbarStore
}

export interface ISnackbarInfo extends IMenu {
    type: "added" | "removed"
}