import { legacy_createStore, applyMiddleware} from 'redux';
import AuthReducer from './reducers/AuthReducer';
import {AsyncStorage} from 'react-native';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';


const persistConfig = {
    key: "root",
    Storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, AuthReducer)
let store = legacy_createStore(AuthReducer, applyMiddleware(thunk));
let persistor = persistStore(store)

export {store, persistor};