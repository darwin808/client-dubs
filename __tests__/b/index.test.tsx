import React from "react"
import { render, screen } from "@testing-library/react"
import FormComponent from "../../src/components/Ui/FormComponent"
import { FormProps } from "../../__mocks__/threadMock"

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
