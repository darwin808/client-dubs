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
    <div className="bg-gray-600 h-screen flex-col  justify-center flex items-center font-FiraSans ">
      <div className="uppercase  text-5xl font-bold text-red-600">
        under maintenance please proceed to
      </div>
      <div>
        <a href="/b" className="underline text-4xl text-purple-600">
          /b
        </a>
      </div>
    </div>
  )
}

export default Home
