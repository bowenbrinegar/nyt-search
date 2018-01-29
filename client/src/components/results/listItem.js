import React, { Component } from 'react'
import Img from './img';
import './index.css'


class ListItem extends Component {
  render() {
    return (
      <div id='listItem'>
        <h1>{this.props.title}</h1>
        <Img src={`http://www.nytimes.com/${this.props.img}`}
             class="thumbnail"
             id="thumbnail"
        />
        <p>{this.props.summary}</p>
        <a href={this.props.link}>Go to Article</a>
      </div>
    )
  }
}

export default ListItem