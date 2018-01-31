import React, { Component } from 'react'


class Filter extends Component {
  render() {
    return (
      <div>
        <h5>Filter</h5>
        <input {...this.props}/>
      </div>
    )
  }
}

export default Filter