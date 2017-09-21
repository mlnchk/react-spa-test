import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          <Link to='/'> App </Link>
        </h1>
        {this.props.children}
      </div>
    )
  }
}

export default App;
