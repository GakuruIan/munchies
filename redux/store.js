import { configureStore, combineReducers } from '@reduxjs/toolkit';
import UserReducer from './UserReducer';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key:'root',
    version:1,
    storage:AsyncStorage,
    whitelist:['user']
}


const baseReducer = combineReducers({user:UserReducer})

const persistedReducer = persistReducer(persistConfig,baseReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

export let persistor = persistStore(store)