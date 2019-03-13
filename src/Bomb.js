// your Bomb code here!
import React from "react";

class Bomb extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  // let timer = (time) => {
  //   setTimeout((time) => text(time), time)
  // }
  //
  // let text = (time) => {
  //   if (time !== 0) {
  //     return `${time} seconds left before I go boom!`
  //   } else {
  //     return `Boom!`
  //   }
  // }


  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <div>
        {message}
      </div>
    )
  }
}
export default Bomb
