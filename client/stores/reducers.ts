import { combineReducers } from 'redux'

import filter from 'stores/reducers/filter'
import guide from 'stores/reducers/guide'
import order from 'stores/reducers/order'

const rootReducers = combineReducers({
    filter,
    guide,
    order
})

export default rootReducers