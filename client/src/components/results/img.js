import React, { Component } from 'react'

class Img extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <img class={this.props.class} src={this.props.src}/>
      </div>
    )
  }
}

export default Img