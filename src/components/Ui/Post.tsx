import { useRouter } from "next/router"

/* eslint-disable camelcase */
interface IPost {
  data: any
}
const Post = ({ data }: IPost) => {
  const { id, title, message, user_id } = data || ""
  const { push } = useRouter()
  const handleClick = () => {
    push({ pathname: `/b/thread/${id}`, query: { title, message, user_id } })
  }
  return (
    <div
      onClick={handleClick}
      className="border cursor-pointer rounded-sm flex  my-2  bg-blue-400 h-auto w-96 flex-col"
    >
      <div className="header">
        Anonymous <span>{title}</span> - <span>{user_id}</span>
      </div>
      <div className=" flex ">
        <div className="flex h-40 w-44 bg-DarkRedColor"></div>
        <div className="flex flex-1 flex-col w-96">
          <div className="h-32">{message}</div>
        </div>
      </div>
    </div>
  )
}
export default Post
