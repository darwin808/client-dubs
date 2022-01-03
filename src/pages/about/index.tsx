import React from "react"
import withAuth from "../../components/Auth"

const index = () => {
  return (
    <div className="Page">
      <h1>ABOUT</h1>
    </div>
  )
}

export default withAuth(index)
