import './App.scss'
import { Container, Col, Row } from 'react-bootstrap'
import { Email } from './components/email'
import { FaBriefcase } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaDraftingCompass } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaToolbox } from 'react-icons/fa'
import { GitHub } from './components/github'
import { LinkedIn } from './components/linkedin'
import { WorkAccordion } from './components/workaccordion.js'
import { ProjectsAccordion } from './components/projectsaccordion'
import data from './resume.json'
import logo from './me.jpg'
import React, { Component } from 'react'

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
                        <Col />
                        <Col>
                            <span className="App-list-title">
                                <FaCode className="App-icons" />
                                {'Languages'}
                            </span>
                            <List list={data.languages} />
                        </Col>
                        <Col>
                            <span className="App-list-title">
                                <FaDraftingCompass className="App-icons" />
                                {'Technologies'}
                            </span>
                            <List list={data.technologies} />
                        </Col>
                        <Col>
                            <span className="App-list-title">
                                <FaToolbox className="App-icons" />
                                {'Tools'}
                            </span>
                            <List list={data.tools} />
                        </Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col>
                            <span class="App-title-with-icon">
                                <FaEdit className="App-icons-large" />
                                {'Personal Projects'}
                                <ProjectsAccordion projects={data.projects} />
                            </span>
                        </Col>
                        <Col>
                            <span class="App-title-with-icon">
                                <FaBriefcase className="App-icons-large" />
                                {'Work History'}
                            </span>
                            <WorkAccordion work={data.work} />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default App
