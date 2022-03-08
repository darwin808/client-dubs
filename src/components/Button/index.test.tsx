import { render, screen } from "@testing-library/react"
import React from "react"
import Button from "."

describe("button", () => {
   beforeEach(() => {
      render(<Button>ok</Button>)
   })
   it("render the button ", () => {
      const el = screen.getByTestId("submitBtn")
      expect(el).toBeInTheDocument()
   })
})
