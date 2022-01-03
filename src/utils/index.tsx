import { IQueries } from "../types"

const switchPages = (page: string) => {
  switch (page) {
    case "/b":
      return 2
    default:
      return 1
  }
}
const toBase64 = async (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    file && reader.readAsDataURL(file)
    reader.onload = async () => {
      return await resolve(reader.result)
    }
    reader.onerror = (error) => reject(error)
  })
const generateQuery = (queries: IQueries[]) => {
  // const queries = [
  //   { name: "page", value: 1 },
  //   { name: "perPage", value: 10 }
  // ]
  const parameters = new URLSearchParams()

  queries.map((e: any) => {
    e?.value && parameters.append(e.name, e.value)
  })
  return parameters.toString()
}
export const helper = {
  switchPages,
  toBase64,
  generateQuery
}
