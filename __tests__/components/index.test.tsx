/* eslint-disable no-unused-vars */
import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import PostComponent from "../../src/components/Ui/Post"
import { Provider } from "react-redux"
import { store } from "../../src/redux/store"
import { threadMock } from "../../__mocks__/threadMock"

const PostProps = {
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
   it("renders a title", () => {
      const title = screen.getByTestId("title")
      expect(title).toBeInTheDocument()
   })
   it("renders date", () => {
      const date = screen.getByTestId("date")
      expect(date).toBeInTheDocument()
   })
})
