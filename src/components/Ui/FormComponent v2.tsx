/* eslint-disable camelcase */
import { useRouter } from "next/router"
import React from "react"
import { Api } from "../../config"
import { useAppSelector } from "../../redux/hooks"
import { RootState } from "../../redux/store"
import { helper } from "../../utils"

const FormComponent = () => {
  const [title, settitle] = React.useState<string>("")
  const [message, setmessage] = React.useState<string>("")
  const [loading, setloading] = React.useState(false)
  const router = useRouter()
  const { pathname } = useRouter()
  const user: any = useAppSelector((e: RootState) => e?.user) || ""
  const user_id: number = user?.newUser?.id
  const thread_id = Number(router.query.id)
  console.log(router)

  React.useEffect(() => {
    console.log(user, pathname.slice(0, 2), "user123")
  }, [user])
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setloading(true)
    const payload = {
      title,
      message,
      page_id: helper.switchPages(pathname.slice(0, 2)),
      user_id,
      thread_id
    }

    const response = await Api.post("/posts", payload)

    response.status === 200 && handlePostSuccess(response.data)
    response.status !== 200 && handlePostError(response)
  }

  const handlePostSuccess = (data: any) => {
    console.log(data)
    setloading(false)
  }
  const handlePostError = (error: any) => {
    console.log(error)
    setloading(false)
  }
  console.log(loading)
  return (
    <form action="submit" onSubmit={handleSubmit} className="bg-yellow-200 p-4 flex flex-col w-96">
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

      <button type="submit">submit</button>
    </form>
  )
}

export default FormComponent
