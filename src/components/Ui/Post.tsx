/* eslint-disable camelcase */
import { useRouter } from "next/router"
import React from "react"
import Button from "../Button"
import moment from "moment"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { pageActions } from "../../redux/actions/index"
import { RootState } from "../../redux/store"
interface IPost {
  data: any
}
const Post = ({ data }: IPost) => {
  const dispatch = useAppDispatch()
  const selectedIds = useAppSelector((e: RootState) => e.selected)
  const [toggleImage, settoggleImage] = React.useState<boolean>(false)
  const { id, title, message, user_id, media, media_small, createdAt } = data || ""
  const { push } = useRouter()

  const [selected, setselected] = React.useState(false)
  const handleClick = () => {
    push({ pathname: `/b/thread/${id}`, query: { title, message, user_id, media, media_small } })
  }
  const handleChecked = (checked: boolean, id: string) => {
    setselected(checked)
    dispatch(pageActions.addSelectedThread(id))
  }
  console.log(selectedIds, "darwin")
  return (
    <div className="PostMain">
      <div className="text-white header flex items-center gap-2">
        <input
          type="checkbox"
          checked={selected}
          onChange={(e: any) => handleChecked(e.target.checked, id)}
        />
        <span className="text-red-300 underline">/{title}</span>
        <span className="font-semibold">Anonymous</span>
        <span className="">{moment(createdAt).format("MM/DD/YY (ddd) HH:mm:ss")}</span>
        <span>No. {id}</span>
        <div className="w-20">
          <Button onClick={handleClick}>Reply</Button>
        </div>
      </div>
      <div className={`flex my-2 ${toggleImage ? "flex-col" : "flex-row"}  `}>
        <div className="flex h-full w-auto ">
          <img
            loading="eager"
            onClick={() => settoggleImage(!toggleImage)}
            src={toggleImage ? media : media_small}
            alt=""
          />
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
