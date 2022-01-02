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
      className={`p-1 ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } w-full rounded-lg uppercase text-white hover:bg-lime-800   bg-lime-600 font-semibold active:scale-95 outline-none text-sm `}
    >
      {children}
    </button>
  )
}

export default Button
