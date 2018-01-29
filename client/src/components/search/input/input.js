import React, { Component } from 'react'
import './input.css'
class Input extends Component {
  render() {
    return (
      <input id='searchInput' type='text' {...this.props}/>
    )
  }
}

export default Input
