import { createStore, compose } from "redux"

import reducers from "stores/reducers"
import initState from "stores/initState"

const composeEnhancers =
	(typeof window !== "undefined" &&
		(window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose)) ||
	compose

const store = createStore(reducers, initState, composeEnhancers())
export default store