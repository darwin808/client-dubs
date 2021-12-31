import React from "react"
import { Ui } from "../components/Ui"
import axios from "axios"
import { helper } from "../utils"

const api = process.env.NEXT_PUBLIC_API

export async function getServerSideProps(context: any) {
  const page = helper.switchPages(context.resolvedUrl)

  const res = await axios.get(`${api}/page/${page}`)

  if (!res.data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data: res.data }
  }
}
const g = ({ data }: any) => {
  console.log(data)
  return (
    <div className="bg-green-200 relative scroll-smooth h-screen w-full">
      <Ui.FormComponent />
      <h1>Tech</h1>
      <Ui.PostsContainer data={data.allPosts} />
    </div>
  )
}

export default g
