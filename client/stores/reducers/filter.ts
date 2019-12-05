import IFilterState, { TFilterAction } from 'stores/types/reducers/filter'

const filter:IFilterState = {
    isOpen: false,
    sortBy: "group",
    orderBy: "ascending"
}

const filterReducer = (state:IFilterState = filter, action: TFilterAction) => {
    switch(action.type){
        case "TOGGLE_FILTER":
            return {
                ...state,
                isOpen: !state.isOpen
            }

        case "UPDATE_SORT_BY":
            return {
                ...state,
                sortBy: action.payload.filter.sortBy
            }

        case "UPDATE_ORDER_BY":
            return {
                ...state,
                orderBy: action.payload.filter.orderBy
            }        

        default:
            return state
    }
}

export default filterReducer