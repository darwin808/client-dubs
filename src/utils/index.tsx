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
export const helper = {
  switchPages,
  toBase64
}
