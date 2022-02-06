import Image from "next/image"
import React from "react"
import { assets } from "../../assets"
import Modal from "../Modal"
import { LoadingBar } from "./styles"

interface IProps {
   percent?: number
}

const Loader = ({ percent }: IProps) => {
   const showPercentBar = percent && (
      <div className="bg-yellow-300  ring ring-yellow-300 h-6 w-96 relative flex rounded-full">
         <LoadingBar percent={percent} />
         <div className="font-bold select-none  absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white">
            <span className="mr-1">{percent === 100 ? "Success" : "Uploading"}</span>
            {percent?.toFixed(0)}%
         </div>
      </div>
   )
   return (
      <Modal isOpen={true} onRequestClose={() => {}}>
         {showPercentBar}
         <Image src={assets.loader} alt="" width={150} height={150} />
      </Modal>
   )
}

export default React.memo(Loader)
