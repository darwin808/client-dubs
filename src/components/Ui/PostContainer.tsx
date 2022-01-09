/* eslint-disable camelcase */
import { useRouter } from "next/router"
import React from "react"
import { Ui } from "."
interface IPostContainer {
  data: any
}

const PostsContainer = ({ data }: IPostContainer) => {
  const { push } = useRouter()
  const handleReply = (data: any) => {
    const { id, title, message, user_id, media, media_small, createdAt } = data || ""
    push({
      pathname: `/b/thread/${id}`,
      query: { title, message, user_id, media, media_small, createdAt }
    })
  }
  const showPosts = data?.map((e: any) => (
    <div key={e.id}>
      <Ui.Post data={e} onClick={() => handleReply(e)} />
    </div>
  ))
  return <div>{showPosts}</div>
}

export default React.memo(PostsContainer)
