import React from "react"
import "../style/SauceInfo.css"
import { Container } from "reactstrap"

function SauceInfo({
  sauceInfo
}) {
  return (
    <Container>
      <div>
        <h1>Sauce Info section</h1>
        <div class="sauceInfo">Sauce information goes here</div>
        <p> {sauceInfo} </p>
      </div>
    </Container>
  )
}

export default SauceInfo
