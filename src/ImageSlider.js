// your ImageSlider code here!
import React, {Component} from 'react';


export default class ImageSlider extends Component {
  constructor(){
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  render(){
    return (
      <div>
        <p>I am a {this.state.currentSlideIndex}</p>
      </div>
    )
  }
}
