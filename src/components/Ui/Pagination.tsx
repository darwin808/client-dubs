import React from "react"
import ReactPaginate from "react-paginate"

interface IProps {
  onPageChange: (e: any) => void
  pageCount: number
  page: number
}
const Pagination = ({ page, onPageChange, pageCount }: IProps) => {
  return (
    <ReactPaginate
      forcePage={page - 1}
      breakLabel="..."
      nextLabel="Next"
      onPageChange={onPageChange}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="Previous"
      className="flex  gap-2 items-center"
      pageClassName="  bg-gray-600 py-1 px-2 rounded-sm "
      pageLinkClassName="text-white underline"
      previousClassName="text-white bg-gray-400 py-1 px-2"
      nextLinkClassName="text-white bg-gray-400 py-1 px-2"
      activeClassName=""
      activeLinkClassName="font-black"
    />
  )
}

export default Pagination
