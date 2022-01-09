/* eslint-disable camelcase */
import { useRouter } from "next/router"
import React from "react"
import useSWR, { useSWRConfig } from "swr"
import { Ui } from "../../../components/Ui"
import Loader from "../../../components/Ui/Loader"
import { Api } from "../../../config"
import { fetcher } from "../../../services"
import { helper } from "../../../utils"

const api = process.env.NEXT_PUBLIC_API
const ENDPOINT: string = "/post"

const ThreadPage = () => {
  const router = useRouter()
  const [percent, setpercent] = React.useState(0)
  const { mutate } = useSWRConfig()
  const { pathname } = useRouter()
  const { id } = router.query

  const page_id: number = helper.switchPages(pathname)
  const thread_id = Number(router.query.id)

  const url: string = `${api}/posts/${id}`
  const uri: string = `${api}/posts/${thread_id}`

  const [title, settitle] = React.useState<string>("")
  const [message, setmessage] = React.useState<string>("")
  const [loading, setloading] = React.useState<boolean>(false)
  const [media, setmedia] = React.useState<any>("")

  const { data, error } = useSWR(url, fetcher)
  if (error) return "An error has occurred."
  if (!data) return <Loader />

  const options = {
    onUploadProgress: (e: any) => {
      const { loaded, total } = e
      setpercent((loaded / total) * 100)
    }
  }
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

    const response = await Api.post(ENDPOINT, payload, options)

    response.status === 200 && handlePostSuccess(response.data)
    response.status !== 200 && handlePostError(response)

    mutate(uri)
    settitle("")
    setmessage("")
    setmedia("")
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
    <div className="Page">
      {loading && <Loader percent={percent} />}
      <h2>
        <a href="/b"> /b</a>
      </h2>

      <div className="w-full flex justify-center">
        <Ui.FormComponent
          heading={"Create a Post"}
          handleSubmit={handleSubmit}
          title={title}
          settitle={settitle}
          message={message}
          setmessage={setmessage}
          media={media}
          setmedia={setmedia}
        />
      </div>
      <Ui.Post data={router.query} />
      <Ui.PostsContainer data={data.posts} />
    </div>
  )
}

export default ThreadPage
