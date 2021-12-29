import { createReducer } from "@reduxjs/toolkit"
import { pageActions } from "../actions"

export const pageReducer = createReducer("", {
  [pageActions.setPageData.toString()]: (state, action) => action.payload,
  [pageActions.clearPageData.toString()]: (state, action) => ""
})
export const userReducer: any = createReducer("", {
  [pageActions.setUserData.toString()]: (state, action) => action.payload,
  [pageActions.clearUserData.toString()]: (state, action) => ""
})
