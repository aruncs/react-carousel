import { Component, h } from "preact"
import Carousel from "./carousel/Carousel.jsx"
import Card from "./card/Card.jsx"

class App extends Component {
  render() {
    const items = [
      <Card />,
      <Card />,
      <Card />,
      <Card />,
      <Card />,
      <Card />,
      <Card />
    ]
    return <Carousel children={items} />
  }
}

export default App
