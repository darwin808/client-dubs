import Image from "next/image"
import React from "react"
import { assets } from "../../assets"
import Modal from "../Modal"

const Loader = () => {
  return (
    <Modal isOpen={true} onRequestClose={() => {}}>
      <Image src={assets.loader} alt="" width={150} height={150} />
    </Modal>
  )
}

export default Loader
