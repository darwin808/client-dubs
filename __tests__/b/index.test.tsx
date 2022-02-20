/* eslint-disable no-unused-vars */
import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import FormComponent from "../../src/components/Ui/FormComponent"
import { Provider } from "react-redux"
import { store } from "../../src/redux/store"

const myMock = jest.fn()
const FormProps = {
   heading: "Create a Thread",
   handleSubmit: myMock,
   title: "/b Random",
   settitle: jest.fn((value) => {}),
   message: "test",
   setmessage: myMock,
   media: "test",
   setmedia: myMock
}

describe("Form component", () => {
   beforeEach(() => {
      render(<FormComponent {...FormProps} />)
   })

   it("renders a form heading", () => {
      const heading = screen.queryByTestId("formHeading")
      expect(heading).toBeInTheDocument()
   })
   it("renders a Form Input", () => {
      const formTitle = screen.getByPlaceholderText("formTitle") as HTMLInputElement
      expect(formTitle).toBeInTheDocument()
      expect(formTitle.value).toBe("/b Random")
   })
   it("renders a Form textare", () => {
      const txtArea = screen.getByPlaceholderText("formMessage") as HTMLTextAreaElement
      expect(txtArea).toBeInTheDocument()
      expect(txtArea.value).toBe("test")
   })
   it("renders a Form button", () => {
      const button = screen.getByTestId("submitBtn")
      expect(button).toBeInTheDocument()
      expect(button.textContent).toBe("submit")
   })
})
