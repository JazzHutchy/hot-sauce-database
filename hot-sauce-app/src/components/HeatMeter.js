import React from "react"
import "../style/HeatMeter.css"
import { Container } from "reactstrap"

function HeatMeter({
  heatLevel
}) {
  return (
    <Container>
      <div>
        <h1>Heat Level</h1>

        <p>{heatLevel}</p>

        <div class="center">
          <div class="heatMeter">
            <div id="bit7" type="div" class="bitbtn circle" />
            <div id="bit6" type="div" class="bitbtn circle" />
            <div id="bit5" type="div" class="bitbtn circle" />
            <div id="bit4" type="div" class="bitbtn circle" />
            <div id="bit3" type="div" class="bitbtn circle" />
            <div id="bit2" type="div" class="bitbtn circle" />
            <div id="bit1" type="div" class="bitbtn circle" />
            <div id="bit0" type="div" class="bitbtn circle" />
          </div>
          <div style={{ height: 20, clear: "both" }} />
        </div>
      </div>
    </Container>
  )
}

export default HeatMeter
