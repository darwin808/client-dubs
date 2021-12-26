import React from "react"
import axios from "axios"

const api = process.env.NEXT_PUBLIC_API
const FormComponent = () => {
  const [title, settitle] = React.useState<string>("")
  const [post, setpost] = React.useState<string>("")
  const [loading, setloading] = React.useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setloading(true)
    const payload = {
      title,
      post,
      user_id: 1,
      media: ["none"],
      like: 1,
      dislike: 2,
      thread_id: 33,
      page_id: 2
    }
    const response = await axios.post(`${api}/post`, payload)

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
