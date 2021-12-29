import React from "react"
import { Ui } from "../../components/Ui"
import { useAppDispatch } from "../../redux/hooks"
import { pageActions } from "../../redux/actions"
import useSWR from "swr"
import { useRouter } from "next/router"

const api = process.env.NEXT_PUBLIC_API

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const switchPages = (page: string) => {
  switch (page) {
    case "/b":
      return 2
    default:
      return 1
  }
}
const b = () => {
  const { pathname } = useRouter()

  const dispatch = useAppDispatch()
  const { data, error } = useSWR(`${api}/page/${switchPages(pathname)}`, fetcher)

  if (error) return "An error has occurred."
  if (!data) return "Loading..."

  dispatch(pageActions.setPageData(data.allPosts))
  return (
    <div className="bg-GreyColor px-20 py-10 relative scroll-smooth min-h-screen w-full">
      <Ui.FormComponent />
      <div className="block text-center">
        <div className="text-3xl font-bold  text-red-400">/b Random</div>
      </div>
      <Ui.PostsContainer posts={data.allPosts} />
    </div>
  )
}

export default b
