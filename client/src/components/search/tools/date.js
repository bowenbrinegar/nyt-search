import React, { Component } from 'react'


class Date extends Component {
  render() {
    return (
      <div>
        <button value='reset'{...this.props}>Reset</button>
        <button value='week'{...this.props}>Past Week</button>
        <button value='three' {...this.props}>Past 3 Months</button>
        <button value='six' {...this.props}>Past 6 Months</button>
        <button value='year' {...this.props}>Past Year</button>
      </div>
    )
  }
}

export default Date