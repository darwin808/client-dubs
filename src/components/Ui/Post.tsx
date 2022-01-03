/* eslint-disable camelcase */
import { useRouter } from "next/router"
import React from "react"
import Button from "../Button"
import moment from "moment"

interface IPost {
  data: any
}
const Post = ({ data }: IPost) => {
  const [toggleImage, settoggleImage] = React.useState<boolean>(false)
  const { id, title, message, user_id, media, media_small, createdAt } = data || ""
  const { push } = useRouter()

  const handleClick = () => {
    push({ pathname: `/b/thread/${id}`, query: { title, message, user_id, media, media_small } })
  }
  console.log(data)
  return (
    <div className=" p-4  cursor-pointer rounded-sm flex  my-2 text-sm  bg-gray-600 h-auto w-full flex-col">
      <div className="text-white header flex items-center gap-2">
        <input type="checkbox" />
        <span className="text-red-300 underline">/{title}</span>
        <span className="font-semibold">Anonymous</span>
        <span className="">{moment(createdAt).format("MM/DD/YY (ddd) HH:mm:ss")}</span>
        <span>No. {id}</span>
        <div className="w-24">
          <Button onClick={handleClick}>Reply</Button>
        </div>
      </div>
      <div className=" flex my-2 ">
        <div className="flex h-full w-auto ">
          <img
            loading="eager"
            onClick={() => settoggleImage(!toggleImage)}
            src={toggleImage ? media : media_small}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col break-all ">
          <div className=" min-h-10rem  block  overflow-y-auto break-all p-2 text-white ">
            {message}
          </div>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Post)
