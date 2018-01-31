import React, { Component } from 'react'
import Img from './img';
import './index.css'
import DB from '../../utils/DB';


class ListItem extends Component {
  handleClick = (event) => {
    const { value } = event.target
    if (value === 'bookmark') {
      DB.saveArticle({
        title: this.props.title,
        image: this.props.img ? `http://www.nytimes.com/${this.props.img}` : null,
        summary: this.props.summary,
        link: this.props.link
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    } else if (value === 'delete') {
      DB.clear(this.props.title)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      this.props.reload()
    }
    // console.log(this.props.title, this.props.img, this.props.summary, this.props.link)
  };

  render() {
    return (
      <div id='listItem'>
        <h1>{this.props.title}</h1>
        <Img src={this.props.img ? `http://www.nytimes.com/${this.props.img}` :
          "https://i.forbesimg.com/media/lists/companies/new-york-times_416x416.jpg"}
             className="thumbnail"
             id="thumbnail"
        />
        <p>{this.props.summary}</p>
        <a href={this.props.link} target="_blank">Go to Article</a>
        <button id='toggleButtontoggle' value={this.props.buttonValue} onClick={this.handleClick}>{this.props.buttonName}</button>
      </div>
    )
  }
}

export default ListItem