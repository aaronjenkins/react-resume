import React, { Component } from "react"
import logo from "./me.jpg"
import "./App.scss"
import data from "./resume.json";
import { Grid, Row, Column } from "react-cellblock"
import { FaDraftingCompass } from "react-icons/fa"
import { FaCode } from "react-icons/fa"
import { FaToolbox } from "react-icons/fa"
import { Email } from "./components/email"
import { LinkedIn } from "./components/linkedin"
import { GitHub } from "./components/github"
import { WorkAccordion } from "./components/workaccordion.js"
import { FaBriefcase } from "react-icons/fa"

const Name = require("./components/name");
const List = require("./components/list");

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid className="App-header">
          <Row>
            <Column width="3/3">
        <div className="App">
          <header className="App-header">
            <Name name={data.basics.name} />
            <img src={logo} className="App-logo" alt="logo" />
            <Email email={data.basics.email} />
            <div>
              <GitHub url={data.basics.github} />
              <LinkedIn url={data.basics.linkedIn} />
            </div>
          </header>
        </div>
        </Column>
        </Row>
        </Grid>
        <Grid>
          <Row>
            <Column width="1/3" color="#fh00">
              <FaCode className="App-icons" />
              <List name="Languages" list={data.languages} />
            </Column>
            <Column width="1/3">
              <FaDraftingCompass className="App-icons" />
              <List name="Technologies" list={data.technologies} />
            </Column>
            <Column width="1/3">
              <FaToolbox className="App-icons" />
              <List name="Tools" list={data.tools} />
            </Column>
          </Row>
          <Row>
          <FaBriefcase className="App-icons-large" />
            <span class='Title-With-Icon'>Work History</span>
            <WorkAccordion work={data.work}  />
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
