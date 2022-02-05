import React from "react"
import ReactPaginate from "react-paginate"
// import Button from "../Button"

interface IProps {
  onPageChange: (e: any) => void
  pageCount: number
  page: number
  onClickDelete: () => void
}
const Pagination = ({ onClickDelete, page, onPageChange, pageCount }: IProps) => {
  return (
    <div className="flex w-full  flex-row items-center justify-between ">
      <ReactPaginate
        forcePage={page - 1}
        breakLabel="..."
        nextLabel="Next"
        onPageChange={onPageChange}
        pageRangeDisplayed={1}
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
      <div>{/* <Button onClick={onClickDelete}>DELETE</Button> */}</div>
    </div>
  )
}

export default Pagination
