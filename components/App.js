import React, { useState } from "react"
import Header from "./Header"
import Main from "./Main"
import Success from "./Success"

function FormApp() {
  const [orderStatus, setOrderStatus] = useState(false)
  function handleOrderSuccess() {
    setOrderStatus(true)
  }

  return (
    <div className="form" id="formApp">
      {orderStatus ? <Success /> : <Main onOrderSuccess={handleOrderSuccess} />}
    </div>
  )
}

export default FormApp
