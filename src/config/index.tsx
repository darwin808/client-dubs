import axios from "axios"

export const api = process.env.NEXT_PUBLIC_API

export const Api = axios.create({
  baseURL: api
})
