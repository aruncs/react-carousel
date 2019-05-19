import { Component, h } from "preact"
import styles from "./styles.css"
//import Card from "../card/Card.jsx"
export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.childrenRefs = []
    this.currentOffset = 0
    this.currentOffsetNext = 0
    this.currentOffsetPrevious = 0
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  render() {
    const { children } = this.props
    const that = this
    const carouselItems = children.map(function(child) {
      return (
        <div
          className="carousel-child-wrapper"
          ref={child => {
            that.childrenRefs.push(child)
          }}
        >
          {child}
        </div>
      )
    })

    return (
      <div
        className="carousel-wrapper"
        ref={node => {
          this.carouselWrapper = node
        }}
      >
        <div
          className="carousel-inner-wrapper"
          ref={node => {
            this.innerWrapper = node
          }}
        >
          {carouselItems}
        </div>
        <div className="prev-button" onClick={this.previous} />
        <div className="next-button" onClick={this.next} />
      </div>
    )
  }

  next(e) {
    this.currentOffset -= this.carouselWrapper.offsetWidth
    this.innerWrapper.style.transform = `translateX(${this.currentOffset}px)`
  }

  previous(e) {
    this.currentOffset += this.carouselWrapper.offsetWidth
    this.innerWrapper.style.transform = `translateX(${this.currentOffset}px)`
  }
}
