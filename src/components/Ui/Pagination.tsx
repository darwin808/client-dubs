import React from "react"
import ReactPaginate from "react-paginate"
import { Api } from "../../config"
import { useAppSelector } from "../../redux/hooks"
import { RootState } from "../../redux/store"
import Button from "../Button"

interface IProps {
  onPageChange: (e: any) => void
  pageCount: number
  page: number
}
const Pagination = ({ page, onPageChange, pageCount }: IProps) => {
  const selectedIds: any = useAppSelector((e: RootState) => e.selected)
  const handleDelete = async () => {
    selectedIds &&
      selectedIds?.map(async (id: any) => {
        const res = await Api.delete("/thread/" + id)
        res.status === 200 && console.log(res)
        res.status !== 200 && console.log(res)
      })
  }
  return (
    <div className="flex w-full  flex-row items-center justify-between ">
      <ReactPaginate
        forcePage={page - 1}
        breakLabel="..."
        nextLabel="Next"
        onPageChange={onPageChange}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="Previous"
        className="flex  gap-2 items-center"
        pageClassName="  bg-gray-600 py-1 px-2 rounded-sm outline-none"
        pageLinkClassName="text-white outline-none"
        previousClassName="text-white bg-gray-400 py-1 px-2"
        nextLinkClassName="text-white bg-gray-400 py-1 px-2"
        activeClassName="bg-gray-700 ring-2 ring-purple-400"
        activeLinkClassName="font-black text-purple-400"
      />
      <div>
        <Button onClick={handleDelete}>DELETE</Button>
      </div>
    </div>
  )
}

export default Pagination
