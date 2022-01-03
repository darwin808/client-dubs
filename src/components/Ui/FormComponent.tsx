/* eslint-disable camelcase */
import React from "react"
import { IForm } from "../../types"
import { helper } from "../../utils"
import Button from "../Button"

const FormComponent = ({
  heading,
  handleSubmit,
  title,
  settitle,
  message,
  setmessage,
  media,
  setmedia
}: IForm) => {
  return (
    <form action="submit" onSubmit={handleSubmit} className="Forms">
      <h1 className="text-center text-3xl font-bold text-white">{heading}</h1>
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="Inputs"
        value={title}
        onChange={(e: any) => settitle(e.target.value)}
      />
      <textarea
        id="post"
        className="Inputs"
        name="post"
        placeholder="Message"
        rows={4}
        cols={30}
        value={message}
        onChange={(e: any) => setmessage(e.target.value)}
      ></textarea>
      <input
        className="text-white "
        type="file"
        onChange={(e: any) => helper.toBase64(e.target.files[0]).then((e) => setmedia(e))}
      />

      <Button type="submit" disabled={!title && !message && !media}>
        submit
      </Button>
    </form>
  )
}

export default React.memo(FormComponent)
