import { Dispatch } from 'redux'

import { IUpdateGuide } from "stores/types/action"

export interface ITabStore {
    guide: {
        version: boolean
        isActive: boolean
    }
}

export interface ITabDispatch {
	updateGuide(active: boolean): Dispatch<IUpdateGuide>
}

export default interface ITab {
    store: ITabStore
	dispatch: ITabDispatch
}