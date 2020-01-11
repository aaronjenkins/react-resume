import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Email } from './components/email'
import { FaBriefcase } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaDraftingCompass } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaToolbox } from 'react-icons/fa'
import { GitHub } from './components/github'
import { LinkedIn } from './components/linkedin'
import { WorkAccordion } from './components/workaccordion.js'
import data from './resume.json'
import logo from './me.jpg'
import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Name = require('./components/name')
const List = require('./components/list')

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App-header">
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
                </div>
                <Container>
                    <Row>
                        <Col sm>
                            <ul className="App-ul">
                                <li>
                                    <span>
                                        <FaCode className="App-icons" />
                                    </span>
                                    <span>{'Languages'}</span>
                                </li>
                                <List name="Languages" list={data.languages} />
                            </ul>
                        </Col>
                        <Col sm>
                            <ul className="App-ul">
                                <li>
                                    <span>
                                        <FaDraftingCompass className="App-icons" />
                                    </span>
                                    <span>{'Technologies'}</span>
                                </li>
                                <List
                                    name="Technologies"
                                    list={data.technologies}
                                />
                            </ul>
                        </Col>
                        <Col sm>
                            <ul className="App-ul">
                                <li>
                                    <span>
                                        <FaToolbox className="App-icons" />
                                    </span>
                                    <span>{'Tools'}</span>
                                </li>
                                <List name="Tools" list={data.tools} />
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            <span>
                                <FaEdit className="App-icons-large" />
                            </span>
                            <span class="App-title-with-icon">Projects</span>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <span>
                                <FaBriefcase className="App-icons-large" />
                            </span>
                            <span class="App-title-with-icon">
                                Work History
                            </span>
                        </div>

                        <WorkAccordion work={data.work} />
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default App
