/* eslint-disable camelcase */
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { useSWRConfig } from "swr"
import { assets } from "../../assets"
import { api, Api } from "../../config"
import { useAppSelector } from "../../redux/hooks"
import { RootState } from "../../redux/store"
import { helper } from "../../utils"
import Button from "../Button"
import Modal from "../Modal"
import Loader from "./Loader"

const FormComponent = () => {
  const { mutate } = useSWRConfig()
  const { pathname } = useRouter()
  const router = useRouter()

  const [title, settitle] = React.useState<string>("")
  const [message, setmessage] = React.useState<string>("")
  const [loading, setloading] = React.useState<boolean>(false)
  const [media, setmedia] = React.useState<any>("")

  const user: any = useAppSelector((e: RootState) => e?.user) || ""
  const user_id: number = user?.newUser?.id
  const page_id: number = helper.switchPages(pathname)
  const thread_id = Number(router.query.id)
  const url: string = `${api}/posts/${thread_id}`

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setloading(true)

    const payload = {
      title,
      message,
      page_id,
      user_id,
      thread_id,
      media
    }

    const response = await Api.post(`/posts`, payload)

    response.status === 200 && handlePostSuccess(response.data)
    response.status !== 200 && handlePostError(response)

    console.log(url)
    mutate(url)
  }

  const handlePostSuccess = (data: any) => {
    setloading(false)
  }
  const handlePostError = (error: any) => {
    setloading(false)
  }
  console.log(loading)

  React.useEffect(() => {
    console.log(media)
  }, [media])
  return (
    <form
      action="submit"
      onSubmit={handleSubmit}
      className="bg-yellow-200 p-4 gap-4 flex flex-col w-96"
    >
      {loading && <Loader />}

      <h1>Post</h1>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e: any) => settitle(e.target.value)}
      />
      <textarea
        id="post"
        name="post"
        rows={4}
        cols={30}
        value={message}
        onChange={(e: any) => setmessage(e.target.value)}
      ></textarea>
      <input
        className=""
        // multiple
        type="file"
        onChange={(e: any) => helper.toBase64(e.target.files[0]).then((e) => setmedia(e))}
      />

      <Button type="submit" disabled={!title && !message && !media}>
        submit
      </Button>
    </form>
  )
}

export default FormComponent
