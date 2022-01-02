import React from "react"
import { Ui } from "../../components/Ui"
import { useAppDispatch } from "../../redux/hooks"
import { pageActions } from "../../redux/actions"
import useSWR from "swr"
import { useRouter } from "next/router"
import { helper } from "../../utils"
import { fetcher } from "../../services"
import { api } from "../../config"

const b = () => {
  const { pathname } = useRouter()
  const dispatch = useAppDispatch()
  const url: string = `${api}/thread/${helper.switchPages(pathname)}`

  const { data, error } = useSWR(url, fetcher)

  if (error) return "An error has occurred."
  if (!data) return "Loading..."

  const { thread } = data || ""
  dispatch(pageActions.setPageData(thread))

  return (
    <div className={`Page`}>
      <div className="block text-center">
        <div className="text-3xl font-bold  text-red-400 ">/b Random</div>
      </div>
      <div className="h-auto w-full flex justify-center e">
        <Ui.FormComponent />
      </div>
      <Ui.PostsContainer data={thread} />
    </div>
  )
}

export default b
