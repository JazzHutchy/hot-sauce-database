import React, { Component } from "react"
import "./App.css"
import SearchField from "./components/SearchField"
import HotSauceDisplay from "./components/HotSauceDisplay"
import HeatMeter from "./components/HeatMeter"
import SauceInfo from "./components/SauceInfo"
import HotSauceCarousel from "./components/HotSauceCarousel"
import { Button } from "reactstrap"

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hot Sauce Database App</p>
        <SearchField />
        <HotSauceCarousel />
        <HotSauceDisplay />
        <HeatMeter />
        <SauceInfo />
      </div>
    )
  }
}

export default App
