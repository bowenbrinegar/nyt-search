import React, { Component } from 'react';
import Nav from './components/nav'
import { Home, Search, About, Bookmarked } from './pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
