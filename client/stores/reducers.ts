import { combineReducers } from 'redux'

import filter from 'stores/reducers/filter'
import guide from 'stores/reducers/guide'
import order from 'stores/reducers/order'
import menu from 'stores/reducers/menu'

const rootReducers = combineReducers({
    filter,
    guide,
    order,
    menu
})

export default rootReducers