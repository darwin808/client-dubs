import React from "react"
interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const StartThread = ({ onClick }: IProps) => {
  return (
    <div className="w-96 h-auto text-2xl flex items-center justify-center">
      <button className="text-white" onClick={onClick}>
        [ <span className="text-blue-400 font-semibold">Start a Thread</span> ]
      </button>
    </div>
  )
}

export default React.memo(StartThread)
