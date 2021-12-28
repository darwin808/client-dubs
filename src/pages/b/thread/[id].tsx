import axios from "axios"
import React from "react"

const api = process.env.NEXT_PUBLIC_API

export async function getServerSideProps(context: any) {
  const threadId = context.query.id

  //   const switchPages = (page: string) => {
  //     switch (page) {
  //       case "/b":
  //         return 2
  //       default:
  //         return 1
  //     }
  //   }
  const res = await axios.get(`${api}/thread/${threadId}`)

  if (!res.data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data: res.data } // will be passed to the page component as props
  }
}
interface IProps {
  data: any
}
const ThreadId = ({ data }: IProps) => {
  return (
    <div className="h-screen bg-fuchsia-100 w-full">
      <h2>
        <a href="/b"> /b</a>
      </h2>
      <h1>lskjdfa;sldkjfa;lskdjf</h1>
    </div>
  )
}

export default ThreadId
