import React, { Component } from 'react';
import logo from './me.jpg';
import './App.css';
import data from './resume.json'
import {Grid, Row, Column} from 'react-cellblock';
import { FaDraftingCompass } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaToolbox } from 'react-icons/fa';
import {Email} from './components/email';
import {Work} from './components/work';
import {LinkedIn} from './components/linkedin';
import { GitHub } from './components/github';

const Name = require('./components/name');
const List = require('./components/list');

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
        <header className="App-header">
          <Name name={data.basics.name}/>
          <img src={logo} className="App-logo" alt="logo" />
          <Email email={data.basics.email} />
          <GitHub url={data.basics.github}/> 
          <LinkedIn url={data.basics.linkedIn} />
        </header>
      </div>
      <Grid>
        <Row>
          <Column width="1/3">
            <FaCode className = 'react-icons'/>
            <List name='Languages' list={data.languages} />
          </Column>
          <Column width="1/3">
            <FaDraftingCompass className = 'react-icons'/>
            <List name='Technologies' list={data.technologies} />
          </Column>
          <Column width="1/3">
          <FaToolbox className = 'react-icons'/>
            <List name='Tools' list={data.tools} />
          </Column>
        </Row>
        <Row>
        <Name name={'Work History'}/>

          <Column>
            <Work work={data.work} />
          </Column>
        </Row>
      </Grid>


    </React.Fragment>
    );
  }
}

export default App;
