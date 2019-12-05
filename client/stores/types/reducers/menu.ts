import { IMenu } from "pageTypes/index"

export interface IUpdateMenu {
    type: "UPDATE_MENU",
    payload: {
        menu: Array<IMenu>
    }
}

export type TMenuAction = IUpdateMenu
type TMenuState = Array<IMenu>

export default TMenuState