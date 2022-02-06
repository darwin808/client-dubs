import { createReducer } from "@reduxjs/toolkit"
import { pageActions } from "../actions"

export const pageReducer = createReducer("", {
   [pageActions.setPageData.toString()]: (_state, action) => action.payload,
   [pageActions.clearPageData.toString()]: (_state, _action) => ""
})
export const userReducer: any = createReducer("", {
   [pageActions.setUserData.toString()]: (_state, action) => action.payload,
   [pageActions.clearUserData.toString()]: (_state, _action) => ""
})

const initialState: any = []
export const selectThreadReducer: any = createReducer(initialState, {
   [pageActions.addSelectedThread.toString()]: (state: any, action: any) => {
      const findId = state && state?.find((e: any) => e === action.payload)
      if (!findId) {
         return [...state, action.payload]
      } else {
         const filteredId = state.filter((e: any) => e !== action.payload)
         return filteredId
      }
   }
})
