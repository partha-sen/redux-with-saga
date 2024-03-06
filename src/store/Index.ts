import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/User.slice"
import { persistStore } from 'redux-persist';

export const rootReducer = combineReducers({
    users: userReducer
})

const persistConfig = {
    key: 'root',
    storage,
  };


  const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
})

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;