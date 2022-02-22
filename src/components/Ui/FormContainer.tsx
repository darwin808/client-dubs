import { Ui } from "."
import React from "react"
import { IFromContainer } from "../../types"

const FormContainer = ({ toggle, FormProps, onClick }: IFromContainer) => {
   return (
      <div className="FormContainer">
         {toggle ? (
            <Ui.FormComponent {...FormProps} />
         ) : (
            <Ui.StartThread title="Start a Thread" onClick={onClick} />
         )}
      </div>
   )
}

export default React.memo(FormContainer)
