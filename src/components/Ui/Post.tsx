/* eslint-disable camelcase */
import React from "react"
import Button from "../Button"
import moment from "moment"
// import { pageActions } from "../../redux/actions/index"
// import * as helper from "../../utils"
import ReactPlayer from "react-player"
import { IPost } from "../../types"

interface IProps {
   onClick?: () => void
   data: IPost | any
}

const Post = ({ data, onClick }: IProps) => {
   const [toggleImage, settoggleImage] = React.useState<boolean>(false)
   const { id, title, message, media, media_small, createdAt } = data || ""

   // const [selected, setselected] = React.useState(false)

   const showMedia =
      media_small?.length > 0 ? (
         <div className="  xs:w-44 h-auto lg:w-full">
            <img
               loading="eager"
               onClick={() => settoggleImage(!toggleImage)}
               src={toggleImage ? media : media_small}
               alt=""
            />
         </div>
      ) : (
         <div className="h-64 w-full">
            <ReactPlayer
               controls={true}
               url={media}
               muted={true}
               playing={false}
               loop={true}
               width={"100%"}
               height={"100%"}
            />
         </div>
      )
   return (
      <div className="PostMain" data-testid="postComponent">
         <div className="text-white header flex items-center gap-2">
            {/* <input
          type="checkbox"
          checked={selected}
          onChange={(e: any) => helper.handleChecked(e.target.checked, id, dispatch, setselected, pageActions)}
        /> */}
            <span data-testid="title" className="text-red-300 underline">
               /{title}
            </span>
            <span className="font-semibold">Anonymous</span>
            <span data-testid="date" className="lg:flex xs:hidden">
               {moment(createdAt).format("MM/DD/YY (ddd) HH:mm:ss")}
            </span>
            <span className="whitespace-nowrap">No. {id}</span>
            <div className="w-20">
               <Button onClick={onClick}>Reply</Button>
            </div>
         </div>
         <div className={`flex my-2 ${toggleImage ? "flex-col" : "flex-row"}  `}>
            <div
               className={` ${media ? "flex" : "hidden"} h-full w-auto items-center justify-start `}
            >
               {showMedia}
            </div>
            <div className="flex flex-1 flex-col break-all ">
               <div className=" min-h-10rem  block  overflow-y-auto break-all p-2 text-white ">
                  {message}
               </div>
            </div>
         </div>
      </div>
   )
}
export default React.memo(Post)
