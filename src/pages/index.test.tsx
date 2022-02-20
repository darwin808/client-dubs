import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./index"
import { Provider } from "react-redux"
import { store } from "../redux/store"

describe("Home", () => {
   beforeEach(() => {
      render(
         <Provider store={store}>
            <Home />
         </Provider>
      )
   })

   it("renders a heading", () => {
      const heading = screen.queryByTestId("heading")
      expect(heading?.textContent).toBe("under maintenance please proceed to")
   })
   it("renders a Link to /b", () => {
      const bLink = screen.queryByTestId("bLink")
      expect(bLink?.textContent).toBe("/b")
   })
})
