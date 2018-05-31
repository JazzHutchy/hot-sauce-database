import React from "react"
import "../style/HotSauceDisplay.css"
import { Container } from "reactstrap"

function HotSauceDisplay({
  name
}) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>Hot Sauce Picture</h1>
      <div class="pictureSpace">Picture</div>
    </div>
  )
}

export default HotSauceDisplay
