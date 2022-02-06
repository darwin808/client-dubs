import { useRouter } from "next/router"
import React from "react"
import { PAGELIST } from "../../constants"

const BreadCrumbs = () => {
   const { push } = useRouter()

   return (
      <div className="flex text-xs text-white absolute top-2 left-3">
         [
         {PAGELIST.map((e: string) => (
            <div className="text-blue-300 ">
               <span className="cursor-pointer hover:text-red-400" onClick={() => push(`/${e}`)}>
                  {e}
               </span>{" "}
               <span className="text-white">/</span>
            </div>
         ))}
         ]
      </div>
   )
}

export default React.memo(BreadCrumbs)
