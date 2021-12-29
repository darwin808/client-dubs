import { createAction } from "@reduxjs/toolkit"

const setPageData = createAction("SET_PAGE_DATA", (payload: string) => ({
  payload
}))
const clearPageData = createAction("CLEAR_PAGE_DATA")

export const pageActions = {
  setPageData,
  clearPageData
}
