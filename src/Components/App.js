import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App__title">App</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App;