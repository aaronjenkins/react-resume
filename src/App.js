import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './resume.json'

const Email = require('./components/email');
const Name = require('./components/name');


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Name name={data.basics.name}/>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
          <p>
            <Email email={data.basics.email} />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
