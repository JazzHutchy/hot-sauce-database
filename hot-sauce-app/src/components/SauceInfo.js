import React from "react"
import "../style/SauceInfo.css"
import { Container } from "reactstrap"

function SauceInfo({
  sauceInfo
}) {
  return (
    <Container>
      <div>
        <h1>Info</h1>
        <div class="sauceInfo">
          <p> {sauceInfo} </p>
        </div>
      </div>
    </Container>
  )
}

export default SauceInfo
