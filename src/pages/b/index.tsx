/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from "react"
import { Ui } from "../../components/Ui"
import { useAppDispatch } from "../../redux/hooks"
import { pageActions } from "../../redux/actions"
import useSWR, { mutate } from "swr"
import { useRouter } from "next/router"
import { helper } from "../../utils"
import { fetcher } from "../../services"
import { Api, api } from "../../config"
import Loader from "../../components/Ui/Loader"
import { RANDOM_PIC } from "../../constants"
import { IQueries } from "../../types"

const b = () => {
  const [page, setpage] = React.useState(1)
  const [perPage, _setperPage] = React.useState(5)
  const [title, settitle] = React.useState<string>("")
  const [message, setmessage] = React.useState<string>("")
  const [media, setmedia] = React.useState<any>("")
  // const [data, setdata] = React.useState<any>("")
  const [loading, setloading] = React.useState<boolean>(false)
  const { pathname } = useRouter()
  const dispatch = useAppDispatch()
  const queries: IQueries[] = [
    { name: "page", value: page },
    { name: "perPage", value: perPage }
  ]
  const url: string = `${api}/thread/${helper.switchPages(pathname)}`
  const uri: string = `${url}?${helper.generateQuery(queries)}`
  const page_id: number = helper.switchPages(pathname)

  const { data, error } = useSWR(uri, fetcher)

  if (error) return "An error has occurred."
  if (!data) return <Loader />

  const { thread } = data || ""
  dispatch(pageActions.setPageData(thread))

  const handlePageClick = (data: any) => {
    const { selected } = data
    setpage(selected + 1)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setloading(true)

    const payload = {
      title,
      message,
      page_id,
      media
    }

    const response = await Api.post(`/thread`, payload)

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
    <div className={`Page`}>
      {loading && <Loader />}
      <div className="block text-center">
        <div className=" flex w-full justify-center">
          <img src={RANDOM_PIC} alt="" />
        </div>
        <div className="Heading1">/b Random</div>
      </div>
      <div className=" h-auto w-full flex justify-center e">
        <Ui.FormComponent
          heading={"Create a Thread"}
          handleSubmit={handleSubmit}
          title={title}
          settitle={settitle}
          message={message}
          setmessage={setmessage}
          media={media}
          setmedia={setmedia}
        />
      </div>
      <Ui.PostsContainer data={thread} />
      <Ui.Pagination page={page} onPageChange={handlePageClick} pageCount={data.lastPage} />
    </div>
  )
}

export default b
