import React, { Component } from 'react';
import logo from './me.jpg';
import './App.css';
import data from './resume.json'

const Email = require('./components/email');
const Name = require('./components/name');
const List = require('./components/list');


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Name name={data.basics.name}/>
        <img src={logo} className="App-logo" alt="logo" />
        <Email email={data.basics.email} />
        <List name='Languages' list={data.languages} />
        </header>
      </div>
    );
  }
}

export default App;
