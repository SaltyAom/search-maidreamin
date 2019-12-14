import TOrderState, { TOrderAction } from "stores/types/reducers/order"

const order: TOrderState = []

const orderReducer = (state: TOrderState = order, action: TOrderAction) => {
    switch(action.type){
        case "ADD_ORDER":
            return [
                ...state,
                action.payload.order
            ]

        case "REMOVE_ORDER":
            let order = [...state]
            order.splice(action.payload.index, 1)

            return order

        default: 
            return state
    }
}

export default orderReducer