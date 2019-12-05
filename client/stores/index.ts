import { createStore, compose } from "redux"

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from "stores/reducers"

const composeEnhancers =
	(typeof window !== "undefined" &&
		(window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose)) ||
	compose

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['guide']
},
	persistedReducers = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducers, composeEnhancers()),
	persistor = persistStore(store)

export default store