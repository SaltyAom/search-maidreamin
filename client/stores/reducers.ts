import { combineReducers } from 'redux'

import filter from 'stores/reducers/filter'
import guide from 'stores/reducers/guide'
import order from 'stores/reducers/order'
import menu from 'stores/reducers/menu'
import exchange from 'stores/reducers/exchange'

const rootReducers = combineReducers({
    filter,
    guide,
    order,
    menu,
    exchange
})

export default rootReducers