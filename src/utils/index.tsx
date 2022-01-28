import { IQueries } from "../types"

export const switchPages = (page: string) => {
  switch (page) {
    case "/b":
      return 2
    default:
      return 1
  }
}
export const toBase64 = async (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    file && reader.readAsDataURL(file)
    reader.onload = async () => {
      return await resolve(reader.result)
    }
    reader.onerror = (error) => reject(error)
  })
export const generateQuery = (queries: IQueries[]) => {
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
export const handleChecked = (
  checked: boolean,
  id: string | number,
  dispatch: any,
  setselected: (e: any) => any,
  pageActions: any
) => {
  setselected(checked)
  dispatch(pageActions.addSelectedThread(id))
}
