import IInitState from "stores/types/initState"
import IAction from "stores/types/action"

const reducers = (state: IInitState, action: IAction): IInitState => {
    switch(action.type){
        case "TOGGLE_FILTER":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    isOpen: !state.filter.isOpen
                }
            }

        case "UPDATE_SORT_BY":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    sortBy: action.payload.filter.sortBy
                }
            }

        case "UPDATE_ORDER_BY":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    orderBy: action.payload.filter.orderBy
                }
            }

        case "UPDATE_GUIDE":
            return {
                ...state,
                guide: {
                    ...state.guide,
                    isActive: action.payload.guide.isActive
                }
            }

        case "ADD_ORDER":
            return {
                ...state,
                order: [...state.order, action.payload.order]
            }

        case "REMOVE_ORDER":
            let order = [...state.order]
            order.splice(action.payload.index, 1)

            return {
                ...state,
                order: order
            }

        default:
            return state
    }
}

export default reducers