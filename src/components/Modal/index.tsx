import React, { ReactNode } from "react"
import ReactModal from "react-modal"

interface IModal {
  children: ReactNode
  isOpen: boolean
  onRequestClose: () => void
  id?: string
}
const customStyles = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: "8888" },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContents: "center",
    flexDirection: "column",
    zIndex: "999999",
    background: "none",
    border: "none"
  }
}
const Modal = ({ children, isOpen, onRequestClose, id }: IModal) => {
  return (
    <ReactModal
      id={id}
      ariaHideApp={false}
      // @ts-ignore
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={50}
      preventScroll={true}
      overlayClassName={{
        base: "fixed bg-opacity-70 top-0 left-0 right-0 bottom-0 bg-black  z-9999 transition-all ease-in-out",
        afterOpen: "opacity-100",
        beforeClose: "opacity-0"
      }}
    >
      {children}
    </ReactModal>
  )
}

export default React.memo(Modal)
