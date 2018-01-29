import React, { Component } from 'react'
import { Button, Input }  from '../../components/search/index'
import './search.css'
import API from '../../utils/API'
import ListItem from '../../components/results/listItem';

class Search extends Component {
  state = {
    divClass: 'searchContainer',
    animate: false,
    searchInput: '',
    res: []
  };

  animateInterval = () => {
    setTimeout(() => {
      this.setState({divClass: 'searchContainer fadeIn'})
    }, 0)
  };

  handleClick = () => {
    API.search(this.state.searchInput)
      .then(res => {
        console.log(res.data.response.docs)
        this.setState({res: res.data.response.docs})
      })
      .catch(err => console.log(err))
  };

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  };

  componentDidMount() {
    this.animateInterval()
  };

  render() {
    return (
      <div>
        <div className={this.state.divClass}>
          <div className='searchFloat'>
            <Input value={this.state.searchInput}
                   name='searchInput'
                   onChange={this.handleInputChange}
            />
            <Button onClick={this.handleClick} />
          </div>
        </div>
        <div id='listItems'>
          {this.state.res.length ? (
            this.state.res.map(result => {
              return (
                <ListItem id="listItem"
                          key={result.web_url}
                          title={result.headline.main}
                          img={result.multimedia[0].url}
                          summary={result.snippet}
                          link={result.web_url}
                />
              )
            })) : (
            <h1>Search for Results</h1>
            )
          }
        </div>
      </div>
    )
  }
}

export default Search