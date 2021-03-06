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
import { Resume } from './components/resume.js'
import data from './resume.json'
import logo from './img/me.svg'
import React, { Component } from 'react'

const List = require('./components/list')

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <div>
                        <GitHub url={data.basics.github} />
                        <LinkedIn url={data.basics.linkedIn} />
                        <Email email={data.basics.email} />
                    </div>
                </div>
                {/* <Container fluid="md">
                    <Row>
                        <Col />
                        <Col sm>
                            <span className="App-list-title">
                                <FaCode className="App-icons" />
                                {'Languages'}
                            </span>
                            <List list={data.languages} />
                        </Col>
                        <Col sm>
                            <span className="App-list-title">
                                <FaDraftingCompass className="App-icons" />
                                {'Technologies'}
                            </span>
                            <List list={data.technologies} />
                        </Col>
                        <Col sm>
                            <span className="App-list-title">
                                <FaToolbox className="App-icons" />
                                {'Tools'}
                            </span>
                            <List list={data.tools} />
                        </Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col sm>
                            <span class="App-title-with-icon">
                                <FaEdit className="App-icons-large" />
                                {'Personal Projects'}
                                <ProjectsAccordion projects={data.projects} />
                            </span>
                        </Col>
                        <Col sm>
                            <span class="App-title-with-icon">
                                <FaBriefcase className="App-icons-large" />
                                {'Work History'}
                            </span>
                            <WorkAccordion work={data.work} />
                        </Col>
                    </Row>
                </Container> */}
            </React.Fragment>
        )
    }
}

export default App
