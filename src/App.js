import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import HomeComponent from './HomeComponent';
import DiscoverComponent from './DiscoverComponent';
import CreateComponent from './CreateComponent';

class App extends Component {
  render() {
    return (
      <Router
        basename={process.env.PUBLIC_URL}>
        <div>
          <MenuComponent />
          <Route exact path="/" component={HomeComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/discover" component={DiscoverComponent} />
          <Route path="/create" component={CreateComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
