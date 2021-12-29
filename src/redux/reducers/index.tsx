import { createReducer } from "@reduxjs/toolkit"
import { pageActions } from "../actions"

export const pageReducer = createReducer("", {
  [pageActions.setPageData.toString()]: (state, action) => action.payload,
  [pageActions.clearPageData.toString()]: (state, action) => ""
})
