import React, { Component } from 'react'
import './button.css'

class Button extends Component {
  render() {
    return (
      <button id='searchButton' {...this.props}>Search</button>
    )
  }
}

export default Button