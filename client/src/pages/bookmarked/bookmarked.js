import React, { Component } from 'react'
import DB from '../../utils/DB';
import ListItem from '../../components/results/listItem';


class Bookmarked extends Component {
  state = {
    res: []
  };

  componentWillMount() {
    this.fetch()
  }

  componentWillUnmount() {
    this.fetch()
  }

  fetch = () => {
    DB.getArticles()
      .then(res => {
        this.setState({res: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div id='listItems'>
        {this.state.res.length ? (
          this.state.res.map(result => {
            return (
              <ListItem id="listItem"
                        key={result.link}
                        title={result.title}
                        img={result.img ? result.multimedia[0].url : null}
                        summary={result.snippet}
                        link={result.link}
                        buttonName="Delete"
                        buttonValue="delete"
                        reload={this.fetch.bind(this)}
              />
            )
          })) : (
          <h1>Search for Results</h1>
        )
        }
      </div>
    )
  }
}

export default Bookmarked