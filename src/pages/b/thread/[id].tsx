import { useRouter } from "next/router"
import React from "react"
import useSWR from "swr"
import { Ui } from "../../../components/Ui"
import { fetcher } from "../../../services"

const api = process.env.NEXT_PUBLIC_API

const ThreadPage = () => {
  const router = useRouter()
  const { id } = router.query
  const url: string = `${api}/posts/${id}`
  const { data, error } = useSWR(url, fetcher)

  if (error) return "An error has occurred."
  if (!data) return "Loading..."
  return (
    <div className="min-h-screen bg-fuchsia-100 w-full">
      <h2>
        <a href="/b"> /b</a>
      </h2>

      <div className="w-full flex justify-center">
        <Ui.FormComponentv2 />
      </div>
      <Ui.Post data={router.query} />
      <Ui.PostsContainer data={data.posts} />
    </div>
  )
}

export default ThreadPage
