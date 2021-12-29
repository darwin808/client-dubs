/* eslint-disable camelcase */
import React from "react"
import { Api } from "../../config"
import { useAppSelector } from "../../redux/hooks"
import { RootState } from "../../redux/store"

const FormComponent = () => {
  const [title, settitle] = React.useState<string>("")
  const [post, setpost] = React.useState<string>("")
  const [loading, setloading] = React.useState(false)

  const user: any = useAppSelector((e: RootState) => e?.user) || ""
  const user_id: number = user?.newUser?.id

  React.useEffect(() => {
    console.log(user, "user123")
  }, [user])
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setloading(true)
    const payload = {
      title,
      post,
      user_id,
      media: [],
      like: 1,
      dislike: 2,
      thread_id: 33,
      page_id: 2
    }

    const response = await Api.post(`/post`, payload)

    response.status === 200 && handlePostSuccess(response.data)
    response.status !== 200 && handlePostError(response)
  }

  const handlePostSuccess = (data: any) => {
    setloading(false)
  }
  const handlePostError = (error: any) => {
    setloading(false)
  }
  return (
    <div className="absolute top-10 right-10">
      {JSON.stringify(loading)}
      <form action="submit" onSubmit={handleSubmit} className="bg-yellow-200 p-4 flex flex-col">
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
          value={post}
          onChange={(e: any) => setpost(e.target.value)}
        ></textarea>

        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default FormComponent
