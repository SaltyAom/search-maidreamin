import { createStore, compose } from "redux"

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from "stores/reducers"
import initState from "stores/initState"

const composeEnhancers =
	(typeof window !== "undefined" &&
		(window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose)) ||
	compose

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['guide']
},
	persistedReducers = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducers, initState, composeEnhancers()),
	persistor = persistStore(store)

export default store