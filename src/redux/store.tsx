/* eslint-disable spaced-comment */
import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { pageReducer, selectThreadReducer, userReducer } from "../redux/reducers"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage
}

const reducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  selected: selectThreadReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
