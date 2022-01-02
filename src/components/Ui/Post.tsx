/* eslint-disable camelcase */
import { useRouter } from "next/router"
import React from "react"
import Button from "../Button"

interface IPost {
  data: any
}
const Post = ({ data }: IPost) => {
  const [toggleImage, settoggleImage] = React.useState<boolean>(false)
  const { id, title, message, user_id, media, media_small } = data || ""
  const { push } = useRouter()

  const handleClick = () => {
    push({ pathname: `/b/thread/${id}`, query: { title, message, user_id, media, media_small } })
  }
  return (
    <div className=" p-4  cursor-pointer rounded-sm flex  my-2  bg-gray-600 h-auto w-full flex-col">
      <div className="header flex items-center gap-2">
        Anonymous <span>{title}</span> - <span>{id}</span> -
        <div className="w-24">
          <Button onClick={handleClick}>Reply</Button>
        </div>
      </div>
      <div className=" flex ">
        <div className="flex h-auto w-auto bg-DarkRedColor">
          <img
            loading="lazy"
            onClick={() => settoggleImage(!toggleImage)}
            src={toggleImage ? media : media_small}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col w-96">
          <div className="h-32">{message}</div>
        </div>
      </div>
    </div>
  )
}
export default Post
