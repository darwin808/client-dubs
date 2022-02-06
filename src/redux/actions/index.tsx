import { createAction } from "@reduxjs/toolkit"

const setPageData = createAction("SET_PAGE_DATA", (payload: string) => ({
   payload
}))
const clearPageData = createAction("CLEAR_PAGE_DATA")

const setUserData = createAction("SET_USER_DATA", (payload: string) => ({
   payload
}))
const clearUserData = createAction("CLEAR_USER_DATA")
const addSelectedThread = createAction("ADD_SELECTED_THREAD", (payload: string) => ({
   payload
}))
const deleteSelectedThread = createAction("DELETE_SELECTED_THREAD", (payload: string) => ({
   payload
}))
const clearSelectedThreads = createAction("CLEAR_SELECTED_THREADS")
export const pageActions = {
   setPageData,
   clearPageData,
   setUserData,
   clearUserData,
   addSelectedThread,
   deleteSelectedThread,
   clearSelectedThreads
}
