import { Component, h } from "preact"
import { Link } from "react-router-dom"
import styles from "./styles.css"

class Card extends Component {
render() {
const { imageUrl } = this.props
return (
<div className="card-wraper">
<div className="card-inner-wrapper">
  <img className="card-image" src="../src/images/img1.jpg" />
  <div className="card-info" />
</div>
</div>
)
}
}

export default Card
