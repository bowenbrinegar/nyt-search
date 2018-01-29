import React, { Component } from 'react'

class Pill extends Component {
  direct = (event) => {
    window.location.assign(this.props.href)
  }

  render() {
    return (
      <div className='pill' onClick={this.direct}>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default Pill