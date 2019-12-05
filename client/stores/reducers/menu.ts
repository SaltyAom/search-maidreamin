import TMenuState, { TMenuAction } from "stores/types/reducers/menu"

const menu: TMenuState = []

const menuReducers = (state: TMenuState = menu, action: TMenuAction) => {
    switch(action.type){
        case "UPDATE_MENU":
            return action.payload.menu

        default:
            return state
    }
}

export default menuReducers