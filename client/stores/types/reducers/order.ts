import { IMenu } from "pageTypes/index"

export interface IAddOrder {
	type: "ADD_ORDER"
	payload: {
		order: IMenu
	}
}

export interface IRemoveOrder {
	type: "REMOVE_ORDER"
	payload: {
		index: number
	}
}

export type TOrderAction = IAddOrder | IRemoveOrder
type TOrderState = Array<IMenu>

export default TOrderState