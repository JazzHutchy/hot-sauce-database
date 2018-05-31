import React, { Component } from "react"
import "./App.css"
import SearchField from "./components/SearchField"
import HotSauceDisplay from "./components/HotSauceDisplay"
import HeatMeter from "./components/HeatMeter"
import SauceInfo from "./components/SauceInfo"
import HotSauceCarousel from "./components/HotSauceCarousel"
import { Button } from "reactstrap"

class App extends Component {
  state = {
    hotSauce: {
      name: "Siracha Gold Edition",
      heatLevel: 11,
      sauceInfo: "It's hot stuff, will make your insides explode"
    }
  }


  render() {
    // const hotSauce = this.state.hotSauce
    const { hotSauce } = this.state

    return (
      <div className="App">
        <h1 class="title">Hot Sauce Database App</h1>
        <SearchField />
        <HotSauceCarousel />
        <HotSauceDisplay
          name={hotSauce.name}
        />
        <HeatMeter
          heatLevel={hotSauce.heatLevel}
        />
        <SauceInfo
          sauceInfo={hotSauce.sauceInfo}
        />
      </div>
    )
  }
}

export default App
