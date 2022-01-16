/* eslint-disable camelcase */
import React, { FC } from "react"
import { Ui } from "../../components/Ui"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { pageActions } from "../../redux/actions"
import useSWR, { mutate } from "swr"
import { useRouter } from "next/router"
import { helper } from "../../utils"
import { fetcher } from "../../services"
import { Api, api } from "../../config"
import Loader from "../../components/Ui/Loader"
import { THREAD } from "../../constants"
import { IQueries } from "../../types"
import { RootState } from "../../redux/store"
import { NextPage } from "next"

const perPage = 5
const PAGE_TITLE = "/b Random"
const PageHeading = "Create a Thread"

const B: NextPage = () => {
  const selectedIds: any = useAppSelector((e: RootState) => e.selected)
  const { push } = useRouter()
  const [percent, setpercent] = React.useState(0)

  const [toggleForm, settoggleForm] = React.useState(false)
  const [page, setpage] = React.useState(1)
  const [title, settitle] = React.useState<string>("")
  const [message, setmessage] = React.useState<string>("")
  const [media, setmedia] = React.useState<any>("")
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

  if (error) return <div>An error has occurred. </div>
  if (!data) return <Loader />
  const { threads } = data || ""

  dispatch(pageActions.setPageData(threads))

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
      }
    }

    const response = await Api.post(THREAD, payload, options)

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
    const { id, title, message, user_id, media, media_small, createdAt } = data || ""
    push({
      pathname: `/b/thread/${id}`,
      query: { title, message, user_id, media, media_small, createdAt }
    })
  }

  const ShowThreads: FC = () => {
    return (
      <div>
        {threads?.map((e: any) => (
          <div key={e.id}>
            <Ui.Post data={e} onClick={() => handleReply(e)} />
          </div>
        ))}
      </div>
    )
  }

  const handleToggleThread = () => {
    settoggleForm(true)
  }

  const PageHeaderProps = {
    title: PAGE_TITLE
  }
  const FormProps = {
    heading: PageHeading,
    handleSubmit: handleSubmit,
    title: title,
    settitle: settitle,
    message: message,
    setmessage: setmessage,
    media: media,
    setmedia: setmedia
  }
  const PaginationProps = {
    onClickDelete: handleDelete,
    page,
    onPageChange: handlePageClick,
    pageCount: data.lastPage
  }

  return (
    <div className="Page">
      {loading && <Loader percent={percent} />}
      <Ui.PageHeader {...PageHeaderProps} />
      <div className="FormContainer">
        {toggleForm ? (
          <Ui.FormComponent {...FormProps} />
        ) : (
          <Ui.StartThread onClick={handleToggleThread} />
        )}
      </div>
      <ShowThreads />
      <Ui.Pagination {...PaginationProps} />
    </div>
  )
}

export default React.memo(B)
