import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer, 
    persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/User.slice"
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas/MySaga';


const sagaMiddleware = createSagaMiddleware({});

export const rootReducer = combineReducers({
    users: userReducer
})

const persistConfig = {
    key: 'root',
    storage,
  };


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [FLUSH,REHYDRATE, PAUSE, PERSIST, PAUSE, REGISTER]
        }
    }).concat(sagaMiddleware)
})

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;