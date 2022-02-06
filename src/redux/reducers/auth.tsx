import { createReducer } from "@reduxjs/toolkit"
import { tokenActions } from "../actions/auth"

export const tokenReducer = createReducer("", {
   [tokenActions.getAccessToken.toString()]: (state, action) => action.payload,
   [tokenActions.removeAccessToken.toString()]: (state, action) => ""
})
