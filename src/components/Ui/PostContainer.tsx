/* eslint-disable camelcase */
import React from "react"
import { Ui } from "."
interface IPostContainer {
  data: any[]
}

const PostsContainer = ({ data }: IPostContainer) => {
  const showPosts = data?.map((e: any) => (
    <div key={e.id}>
      <Ui.Post data={e} />
    </div>
  ))
  return <div>{showPosts}</div>
}

export default PostsContainer
