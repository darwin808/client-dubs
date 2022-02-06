import React from "react"
interface IProps {
   onClick: React.MouseEventHandler<HTMLButtonElement>
   title: string
}

const StartThread = ({ onClick, title }: IProps) => {
   return (
      <div className="w-96 h-auto text-2xl flex items-center justify-center">
         <button className="text-white" onClick={onClick}>
            [ <span className="text-blue-400 font-semibold">{title}</span> ]
         </button>
      </div>
   )
}

export default React.memo(StartThread)
