import React, { Component } from 'react'

class Img extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <img className={this.props.className} src={this.props.src} alt={this.props.src}/>
      </div>
    )
  }
}

export default Img