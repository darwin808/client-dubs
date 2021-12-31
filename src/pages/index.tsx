import type { NextPage } from "next"
import { Api } from "../config"
import React from "react"
import { v4 as uuidv4 } from "uuid"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { pageActions } from "../redux/actions"
import { RootState } from "../redux/store"

const username = `anonymous- ${uuidv4()}`

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((e: RootState) => e.user)
  const payload = {
    username
  }
  const loginAnon = async () => {
    const user = await Api.post("/user", payload)

    user && dispatch(pageActions.setUserData(user.data))
  }

  React.useEffect(() => {
    loginAnon()
  }, [])
  React.useEffect(() => {
    console.log(user, "index user")
  }, [user])
  return (
    <div className="bg-red-200 h-screen">
      <a href="/b" className="underline text-lg">
        /b
      </a>
    </div>
  )
}

export default Home
