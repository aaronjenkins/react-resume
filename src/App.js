import React, { Component } from 'react'
import logo from './me.jpg'
import './App.scss'
import data from './resume.json'
import { Grid, Row, Column } from 'react-cellblock'
import { FaDraftingCompass } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaToolbox } from 'react-icons/fa'
import { Email } from './components/email'
import { LinkedIn } from './components/linkedin'
import { GitHub } from './components/github'
import { WorkAccordion } from './components/workaccordion.js'
import { FaBriefcase } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'

const Name = require('./components/name')
const List = require('./components/list')

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
                                    <img
                                        src={logo}
                                        className="App-logo"
                                        alt="logo"
                                    />
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
                        <Column width="1/8" className="App-column" />
                        <Column width="2/8" className="App-column">
                            <ul className="App-ul">
                                <li>
                                    <FaCode className="App-icons" />
                                    {'Languages'}
                                </li>
                                <List name="Languages" list={data.languages} />
                            </ul>
                        </Column>
                        <Column width="2/8" className="App-column">
                            <ul className="App-ul">
                                <li>
                                    <FaDraftingCompass className="App-icons" />
                                    {'Technologies'}
                                </li>
                                <List
                                    name="Technologies"
                                    list={data.technologies}
                                />
                            </ul>
                        </Column>
                        <Column width="2/8" className="App-column">
                        <ul className="App-ul">
                                <li>
                                    <FaToolbox className="App-icons" />
                                    {'Tools'}
                                </li>
                                <List
                                    name="Tools"
                                    list={data.tools}
                                />
                            </ul>
                        </Column>
                        <Column width="1/8" className="App-column" />
                    </Row>
                    <Row>
                        <span class="App-title-with-icon">
                            <FaEdit className="App-icons-large" />
                            Projects
                        </span>
                    </Row>
                    <Row>
                        <span class="App-title-with-icon">
                            {' '}
                            <FaBriefcase className="App-icons-large" />
                            Work History
                        </span>
                        <WorkAccordion work={data.work} />
                    </Row>
                </Grid>
            </React.Fragment>
        )
    }
}

export default App
