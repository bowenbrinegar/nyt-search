import React, { Component } from 'react'
import API from '../../utils/API';
import ListItem from '../../components/results/listItem';

class Home extends Component {
  state = {
    res: []
  }

  componentWillMount() {
    API.popular()
      .then(res => this.setState({res: res.data.response.docs}))
      .catch(err =>  console.log(err))
  }
  render() {
    return (
      <div id='listItems'>
        {this.state.res.length ? (
          this.state.res.map(result => {
            return (
              <ListItem id="listItem"
                        key={result.web_url}
                        title={result.headline.main}
                        img={result.multimedia[0] ? result.multimedia[0].url : null}
                        summary={result.snippet}
                        link={result.web_url}
                        buttonName="Bookmark"
                        buttonValue="bookmark"
                        reload={null}
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

export default Home