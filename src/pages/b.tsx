import React from "react"
import { Ui } from "../components/Ui"
import axios from "axios"
// import { useRouter } from "next/router"
const api = process.env.NEXT_PUBLIC_API
export async function getServerSideProps(context: any) {
  const page = context.resolvedUrl

  const switchPages = (page: string) => {
    switch (page) {
      case "/b":
        return 2
      default:
        return 1
    }
  }
  const res = await axios.get(`${api}/page/${switchPages(page)}`)

  if (!res.data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data: res.data } // will be passed to the page component as props
  }
}
const b = ({ data }: any) => {
  console.log(data)
  return (
    <div className="bg-green-200 relative scroll-smooth h-auto w-full">
      <Ui.FormComponent />
      <h1>random</h1>
      <Ui.PostsContainer posts={data.allPosts} />
    </div>
  )
}

export default b
