import { Dispatch } from 'redux'

import { IUpdateGuide } from "stores/types/action"

export interface ITabDispatchConnect {
	dispatch: {
		updateGuide(active: boolean): Dispatch<IUpdateGuide>
	}
}

export interface ITabDispatch {
	updateGuide(active: boolean): Dispatch<IUpdateGuide>
}

export default interface ITab {
	dispatch: ITabDispatch
}