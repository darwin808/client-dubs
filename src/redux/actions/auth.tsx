import { createAction } from "@reduxjs/toolkit"

const removeAccessToken = createAction("DELETE_ACCESS_TOKEN")
const getAccessToken = createAction("GET_ACCESS_TOKEN", (payload: string) => ({
  payload
}))

export const tokenActions = {
  getAccessToken,
  removeAccessToken
}
