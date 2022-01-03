import type { NextPage } from "next"
import React from "react"
import { useAppSelector } from "../redux/hooks"
import { RootState } from "../redux/store"

const Home: NextPage = () => {
  const user = useAppSelector((e: RootState) => e.user)
  React.useEffect(() => {
    console.log(user, "index user")
  }, [user])
  return (
    <div className="bg-red-200 h-screen ">
      <a href="/b" className="underline text-lg">
        /b
      </a>
    </div>
  )
}

export default Home
