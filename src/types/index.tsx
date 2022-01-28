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

export interface IPost {
  id: number | string
  title: string
  message: string
  media: string
  media_small: string
  createdAt: string
  user_id?: string
}
