import React, { Component } from "react";

export default class Bomb extends Component {

  constructor(props){
    super(props)
    this.state={
      secondsLeft: props.initialCount
    }
  }

  // countDown = () => {
  //   setTimeout(() => {this.setState.secondsLeft - 1}, 1000)
  // }

  render(){
    return <div>
    {this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
    </div>
  }

}
