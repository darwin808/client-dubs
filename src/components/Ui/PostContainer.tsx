import React from "react"

interface IPostContainer {
  posts: any[]
}
interface IPost {
  title: string
  post: string
}
const Post = ({ title, post }: IPost) => {
  return (
    <div className="flex  my-2  bg-blue-400 h-auto w-32 flex-col">
      <div className="">{title}</div>
      <div className="h-32">{post}</div>
    </div>
  )
}
const PostsContainer = ({ posts }: IPostContainer) => {
  const showPosts = posts.map((e: any) => (
    <div key={e.id}>
      <Post title={e.title} post={e.post} />
    </div>
  ))
  return <div>{showPosts}</div>
}

export default PostsContainer
