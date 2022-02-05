/* eslint-disable camelcase */
import { useRouter } from "next/router"
import React from "react"
import useSWR, { useSWRConfig } from "swr"
import { Ui } from "../../../components/Ui"
import Loader from "../../../components/Ui/Loader"
import { Api } from "../../../config"
import { fetcher } from "../../../services"
import * as helper from "../../../utils"

const api = process.env.NEXT_PUBLIC_API
const ENDPOINT: string = "/posts"
const heading = "Post a Reply"
const PAGE_TITLE = "/b Random"

const ThreadPage = () => {
  const router = useRouter()
  const { mutate } = useSWRConfig()
  const { pathname } = useRouter()
  const { id } = router.query

  const page_id: number = helper.switchPages(pathname)
  const thread_id = Number(router.query.id)

  const url: string = `${api}/posts/${id}`
  const uri: string = `${api}/posts/${thread_id}`

  const [percent, setpercent] = React.useState(0)
  const [toggleForm, settoggleForm] = React.useState(false)
  const [title, settitle] = React.useState<string>("")
  const [message, setmessage] = React.useState<string>("")
  const [loading, setloading] = React.useState<boolean>(false)
  const [media, setmedia] = React.useState<any>("")

  const { data, error } = useSWR(url, fetcher)
  if (error) return <div>An error has occurred.</div>
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
  const handleReply = (data: any) => {
    window.scroll(0, 0)
  }
  const handleToggleThread = () => {
    settoggleForm(true)
  }

  const PageHeaderProps = {
    title: PAGE_TITLE
  }
  const FormProps = {
    heading,
    handleSubmit,
    title,
    settitle,
    message,
    setmessage,
    media,
    setmedia
  }
  const showPosts = data?.posts?.map((e: any) => (
    <div key={e.id}>
      <Ui.Post data={e} onClick={() => handleReply(e)} />
    </div>
  ))

  const StartThreadProps = {
    onClick: handleToggleThread,
    title: heading
  }
  const formContainer = (
    <div className="FormContainer">
      {toggleForm ? <Ui.FormComponent {...FormProps} /> : <Ui.StartThread {...StartThreadProps} />}
    </div>
  )
  console.log(router.query, "wewe")
  return (
    <div className="Page">
      {loading && <Loader percent={percent} />}
      <Ui.PageHeader {...PageHeaderProps} />
      {formContainer}
      <Ui.Post data={router.query} onClick={() => {}} />
      <div>{showPosts}</div>
    </div>
  )
}

export default React.memo(ThreadPage)
