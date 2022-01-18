/* eslint-disable camelcase */
import React from "react"
import Button from "../Button"
import moment from "moment"
import { useAppDispatch } from "../../redux/hooks"
import { pageActions } from "../../redux/actions/index"
import * as helper from "../../utils"
import ReactPlayer from "react-player"

interface IPost {
  onClick?: () => void
  data: any
}

const Post = ({ data, onClick }: IPost) => {
  const dispatch = useAppDispatch()
  const [toggleImage, settoggleImage] = React.useState<boolean>(false)
  const { id, title, message, media, media_small, createdAt } = data || ""

  const [selected, setselected] = React.useState(false)

  const showMedia =
    media_small.length > 0 ? (
      <img
        loading="eager"
        onClick={() => settoggleImage(!toggleImage)}
        src={toggleImage ? media : media_small}
        alt=""
      />
    ) : (
      <ReactPlayer
        controls={true}
        url={media}
        muted={true}
        playing={false}
        loop={true}
        width={"300px"}
        height={"250px"}
      />
    )
  React.useEffect(() => {
    console.log(selected, "wewe")
  }, [selected])
  return (
    <div className="PostMain">
      <div className="text-white header flex items-center gap-2">
        <input
          type="checkbox"
          checked={selected}
          onChange={(e: any) => {
            console.log(e.target.checked, "wewe")
            helper.handleChecked(e.target.checked, id, dispatch, setselected, pageActions)
          }}
        />
        <span className="text-red-300 underline">/{title}</span>
        <span className="font-semibold">Anonymous</span>
        <span className="">{moment(createdAt).format("MM/DD/YY (ddd) HH:mm:ss")}</span>
        <span>No. {id}</span>
        <div className="w-20">
          <Button onClick={onClick}>Reply</Button>
        </div>
      </div>
      <div className={`flex my-2 ${toggleImage ? "flex-col" : "flex-row"}  `}>
        <div className={` ${media ? "flex" : "hidden"} h-full w-auto items-center justify-start `}>
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
