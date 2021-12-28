/* eslint-disable camelcase */
import React from "react"
import { useRouter } from "next/router"
interface IPostContainer {
  posts: any[]
}
interface IPost {
  data: any
}
const Post = ({ data }: IPost) => {
  const { title, post, user_id, thread_id } = data || ""
  const { push } = useRouter()
  const handleClick = () => {
    console.log(data)
    push({ pathname: `/b/thread/${thread_id}` })
  }
  return (
    <div
      onClick={handleClick}
      className="border rounded-sm flex  my-2  bg-blue-400 h-auto w-96 flex-col"
    >
      <div className="header">
        Anonymous <span>{title}</span> - <span>{user_id}</span>
      </div>
      <div className=" flex ">
        <div className="flex h-40 w-44 bg-DarkRedColor"></div>
        <div className="flex flex-1 flex-col w-96">
          <div className="h-32">{post}</div>
        </div>
      </div>
    </div>
  )
}
const PostsContainer = ({ posts }: IPostContainer) => {
  const showPosts = posts.map((e: any) => (
    <div key={e.id}>
      <Post data={e} />
    </div>
  ))
  return <div>{showPosts}</div>
}

export default PostsContainer
