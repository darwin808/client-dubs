export interface IForm {
  heading: string
  handleSubmit: (e: any) => void
  title: string
  settitle: (e: any) => void
  message: string
  setmessage: (e: any) => void
  media: string
  setmedia: (e: any) => void
}

export interface IQueries {
  name: string
  value: number
}
