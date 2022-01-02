/* eslint-disable camelcase */
import { useRouter } from "next/router"
import React from "react"
import { useSWRConfig } from "swr"
import { api, Api } from "../../config"
import { helper } from "../../utils"
import Button from "../Button"
import Loader from "./Loader"

const FormComponent = () => {
  const { mutate } = useSWRConfig()
  const { pathname } = useRouter()
  const router = useRouter()

  const [title, settitle] = React.useState<string>("")
  const [message, setmessage] = React.useState<string>("")
  const [loading, setloading] = React.useState<boolean>(false)
  const [media, setmedia] = React.useState<any>("")

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
      thread_id,
      media
    }

    const response = await Api.post(`/posts`, payload)

    response.status === 200 && handlePostSuccess(response.data)
    response.status !== 200 && handlePostError(response)

    mutate(url)
  }

  const handlePostSuccess = (data: any) => {
    console.log(data)
    setloading(false)
  }
  const handlePostError = (error: any) => {
    console.log(error)
    setloading(false)
  }

  return (
    <form action="submit" onSubmit={handleSubmit} className="Forms">
      {loading && <Loader />}

      <h1 className="text-center text-3xl font-bold text-white">Create a Post</h1>
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="Inputs"
        value={title}
        onChange={(e: any) => settitle(e.target.value)}
      />
      <textarea
        id="post"
        name="post"
        placeholder="Message"
        className="Inputs"
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
