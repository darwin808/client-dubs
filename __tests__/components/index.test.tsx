import React from "react"
import { render, screen } from "@testing-library/react"
import PostComponent from "../../src/components/Ui/Post"
import { FormProps, threadMock } from "../../__mocks__/threadMock"
import moment from "moment"
import FormContainer from "../../src/components/Ui/FormContainer"

interface IProps {
   onClick?: () => void
   data: any
}
const PostProps: IProps = {
   data: threadMock,
   onClick: jest.fn()
}

describe("Post component", () => {
   beforeEach(() => {
      render(<PostComponent {...PostProps} />)
   })

   it("renders a  POst component", () => {
      const postUI = screen.queryByTestId("postComponent")
      expect(postUI).toBeInTheDocument()
   })
   it("renders the id of the post", () => {
      const id = screen.getByTestId("id")
      expect(id).toBeInTheDocument()
      expect(id.textContent).toBe(`No. ${threadMock.id}`)
   })
   it("renders a title", () => {
      const title = screen.getByTestId("title")
      expect(title).toBeInTheDocument()
      expect(title.textContent).toBe(`/${threadMock.title}`)
   })
   it("renders date", () => {
      const date = screen.getByTestId("date")
      expect(date).toBeInTheDocument()
      expect(date.textContent).toBe(moment(threadMock.createdAt).format("MM/DD/YY (ddd) HH:mm:ss"))
   })
   it("renders mesage", () => {
      const msg = screen.getByTestId("message")
      expect(msg).toBeInTheDocument()
      expect(msg.textContent).toBe(threadMock.message)
   })
   it("renders submit button", () => {
      const btn = screen.getByTestId("submitBtn")
      expect(btn).toBeInTheDocument()
      expect(btn.textContent).toBe("Reply")
   })
})

const FormContainerProps = {
   toggle: false,
   FormProps,
   onClick: jest.fn()
}
describe("Post component", () => {
   beforeEach(() => {
      render(<FormContainer {...FormContainerProps} />)
   })

   it("renders a   form", () => {
      const formContainer = screen.queryByTestId("formContainer")
      expect(formContainer).toBeInTheDocument()
   })
   it("renders a   start a thread", () => {
      const startThread = screen.getByText("Start a Thread")
      expect(startThread).toBeInTheDocument()
   })
})
