import React from "react"
import { RANDOM_PIC } from "../../constants"
interface Iprops {
  title: string
}
const PageHeader = ({ title }: Iprops) => {
  console.log("header")
  return (
    <div className="block text-center">
      <div className=" flex w-full justify-center mb-4 h-24">
        <img src={RANDOM_PIC} alt="" />
      </div>
      <div className="Heading1">{title}</div>
    </div>
  )
}

export default React.memo(PageHeader)
