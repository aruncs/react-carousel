import { Component, h } from "preact"
import { Link } from "react-router-dom"
import styles from "./styles.scss"

class Card extends Component {
  render() {
    const { imageUrl } = this.props
    return (
      <div className="card-wraper">
        <div className="card-image" />

        <div className="card-info" />
        <img src="../src/images/img1.jpg" />
      </div>
    )
  }
}

export default Card
