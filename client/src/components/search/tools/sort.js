import React, { Component } from 'react'


class Sort extends Component {
  render() {
    return (
      <div>
        <button value='new' {...this.props}>Newest</button>
        <button value='old' {...this.props}>Oldest</button>
      </div>
    )
  }
}


export default Sort