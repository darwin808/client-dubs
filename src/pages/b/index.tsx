import React from "react"
import { Ui } from "../../components/Ui"
import axios from "axios"

const api = process.env.NEXT_PUBLIC_API
const switchPages = (page: string) => {
  switch (page) {
    case "/b":
      return 2
    default:
      return 1
  }
}
export async function getServerSideProps(context: any) {
  const page = context.req.url

  const res = await axios.get(`${api}/page/${switchPages(page)}`)

  if (!res.data) {
    return {
      notFound: true
    }
  }

  return {
    props: { serverData: res.data }
  }
}

const b = ({ serverData }: any) => {
  // const [clientData, setclientData] = React.useState<any>([])
  // const getClientData = async () => {
  //   const res = await axios.get(`${api}/page/2`)
  //   setclientData(res.data)
  // }

  const data = serverData?.allPosts
  return (
    <div className="bg-GreyColor px-20 py-10 relative scroll-smooth min-h-screen w-full">
      <Ui.FormComponent />
      <div className="block text-center">
        <div className="text-3xl font-bold  text-red-400">/b Random</div>
      </div>
      <Ui.PostsContainer posts={data} />
    </div>
  )
}

export default b
