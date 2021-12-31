import { Api } from "../config"

export const fetcher = (url: string) => Api.get(url).then((res) => res.data)
