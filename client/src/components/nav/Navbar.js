import React, { Component } from 'react'
import Pill from './Pill'
import './nav.css'


class Navbar extends Component {
  render() {
    return (
      <div id='navContainer'>
        <Pill name="Home" href="/home"/>
        <Pill name="Search" href="/search"/>
        <Pill name="About" href="/about"/>
        <Pill name="Bookmarked" href="/bookmarked"/>
      </div>
    )
  }
}

export default Navbar