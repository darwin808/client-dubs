/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from "react"
import { Ui } from "../../components/Ui"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { pageActions } from "../../redux/actions"
import useSWR, { mutate } from "swr"
import { useRouter } from "next/router"
import { helper } from "../../utils"
import { fetcher } from "../../services"
import { Api, api } from "../../config"
import Loader from "../../components/Ui/Loader"
import { RANDOM_PIC } from "../../constants"
import { IQueries } from "../../types"
import { RootState } from "../../redux/store"
import { LoadingBar } from "../../components/Ui/styles"

const b = () => {
  const selectedIds: any = useAppSelector((e: RootState) => e.selected)
  const [percent, setpercent] = React.useState(0)

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

  const handleDelete = async () => {
    selectedIds &&
      selectedIds?.map(async (id: any) => {
        const res = await Api.delete("/thread/" + id)
        res.status === 200 && console.log(res)
        res.status !== 200 && console.log(res)
      })
  }

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

    const options = {
      onUploadProgress: (e: any) => {
        const { loaded, total } = e
        setpercent((loaded / total) * 100)
        console.log(`${(loaded / total) * 100}`)
      }
    }
    const response = await Api.post(`/thread`, payload, options)

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
      {loading && <Loader percent={percent} />}
      <div className="block text-center">
        <div className=" flex w-full justify-center mb-4 h-24">
          <img src={RANDOM_PIC} alt="" />
        </div>
        <div className="Heading1">/b Random</div>
      </div>
      <div className=" h-auto w-full flex justify-center my-2">
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
      <Ui.Pagination
        onClickDelete={handleDelete}
        page={page}
        onPageChange={handlePageClick}
        pageCount={data.lastPage}
      />
    </div>
  )
}

export default b
