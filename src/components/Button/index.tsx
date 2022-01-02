import React from "react"

interface Iprops {
  children: any
  type?: string
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ disabled, children, type, onClick }: Iprops) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-2 flex justify-center items-center ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } w-full rounded-md uppercase text-white hover:bg-purple-800   bg-purple-600 font-semibold active:scale-95 outline-none text-sm `}
    >
      {children}
    </button>
  )
}

export default Button
