import { createAction } from "@reduxjs/toolkit"

const setPageData = createAction("SET_PAGE_DATA", (payload: string) => ({
  payload
}))
const clearPageData = createAction("CLEAR_PAGE_DATA")

const setUserData = createAction("SET_USER_DATA", (payload: string) => ({
  payload
}))
const clearUserData = createAction("CLEAR_USER_DATA")
export const pageActions = {
  setPageData,
  clearPageData,
  setUserData,
  clearUserData
}
