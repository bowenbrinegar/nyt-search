import React, { Component } from 'react'
import { Button, Input }  from '../../components/search/index'
import './search.css'
import API from '../../utils/API'
import ListItem from '../../components/results/listItem';
import Moment from 'moment'
import Date from '../../components/search/tools/date';
import Filter from '../../components/search/tools/filter';
import Sort from '../../components/search/tools/sort';
import DB from '../../utils/DB'

class Search extends Component {
  state = {
    divClass: 'searchContainer',
    animate: false,
    searchInput: '',
    fq: '',
    sort: '',
    page: 1,
    begin: Moment().format('YYYY/MM/DD'),
    end: '',
    res: []
  };

  animateInterval = () => {
    setTimeout(() => {
      this.setState({divClass: 'searchContainer fadeInLarge'})
    }, 0)
  };

  fetch = () => {
    API.search(this.state.searchInput, this.state.fq,
      this.state.begin, this.state.end,
      this.state.sort, this.state.page)
      .then(res => {
        this.setState({res: res.data.response.docs})
      })
      .catch(err => console.log(err))
    this.setState({
      searchInput: '',
      fq: '',
      sort: '',
      page: 1,
      begin: Moment().format('YYYY/MM/DD'),
      end: '',
    })
    // DB.clear().then(res => console.log(res)).catch(err => console.log(err))
  };

  sort = (event) => {
    const { value } = event.target
    if (value === 'reset') { this.setState({end: Moment().format('YYYY/MM/DD')})}
    else if (value === 'week') { this.setState({end: Moment().subtract(7, 'days').format('YYYY/MM/DD')})}
    else if (value === 'three') { this.setState({end: Moment().subtract(3, 'months').format('YYYY/MM/DD')})}
    else if (value === 'six') { this.setState({end: Moment().subtract(6, 'months').format('YYYY/MM/DD')})}
    else if (value === 'year') { this.setState({end: Moment().subtract(1, 'years').format('YYYY/MM/DD')})}
    else if (value === 'new') { this.setState({sort: 'newest'})}
    else if (value === 'old') { this.setState({sort: 'oldest'})}
  }

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
            <Button onClick={this.fetch} />
          </div>
          <div id='tools'>
            <div id='toolComponents'>
              <Date onClick={this.sort}/>
            </div>
            <div id='toolComponents'>
              <Filter value={this.state.fq}
                      name="fq"
                      onChange={this.handleInputChange}
              />
            </div>
            <div id='toolComponents'>
              <Sort onClick={this.sort}/>
            </div>
          </div>
        </div>
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
      </div>
    )
  }
}

export default Search