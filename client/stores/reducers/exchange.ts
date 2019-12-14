import IExchangeStore, { TExchangeAction } from 'stores/types/reducers/exchange'

const exchange: IExchangeStore = {
    serviceCharge: false
}

const exchangeReducers = (state: IExchangeStore = exchange, action: TExchangeAction) => {
    switch(action.type){
        case "UPDATE_SERVICE_CHARGE":
            return {
                ...state,
                serviceCharge: action.payload.exchange.serviceCharge
            }

        default:
            return state
    }
}  

export default exchangeReducers