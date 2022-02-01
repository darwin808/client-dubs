/* eslint-disable camelcase */
import React, { FormEvent } from "react"
import Swal from "sweetalert2"
import { IForm } from "../../types"
import * as helper from "../../utils"
import Button from "../Button"

const FormComponent = ({ heading, handleSubmit, title, settitle, message, setmessage, media, setmedia }: IForm) => {
  const handleMedia = (data: any) => {
    if (data.size > 2000000) {
      Swal.fire({
        icon: "error",
        title: "File size error",
        text: "Try Again"
      })
      return null
    }

    return helper.toBase64(data).then((e: any) => setmedia(e))
  }
  return (
    <form action="submit" onSubmit={handleSubmit} className="Forms">
      <h1 className="text-center text-3xl font-bold text-white">{heading}</h1>
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="Inputs"
        value={title}
        onChange={(e: FormEvent<HTMLInputElement>) => settitle(e.currentTarget.value)}
      />
      <textarea
        id="post"
        className="Inputs"
        name="post"
        placeholder="Message"
        rows={4}
        cols={30}
        value={message}
        onChange={(e: FormEvent<HTMLTextAreaElement>) => setmessage(e.currentTarget.value)}
      ></textarea>
      <input
        className="text-white "
        type="file"
        onChange={(e: any) => handleMedia(e.target.files[0])}
        accept="video/*,image/*"
      />

      <Button type="submit" disabled={!title && !message && !media}>
        submit
      </Button>
    </form>
  )
}

export default React.memo(FormComponent)
