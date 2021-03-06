import { FaAngleRight } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import { FaProjectDiagram } from 'react-icons/fa'
import { FaStickyNote } from 'react-icons/fa'
const React = require('react')

export class ProjectsAccordion extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <div {...{ className: 'wrapper' }}>
                    <ul {...{ className: 'accordion-list' }}>
                        {this.props.projects.map((props, key) => {
                            if (props.display === true)
                                return (
                                    <li
                                        {...{
                                            className: 'accordion-list__item',
                                            key,
                                        }}
                                    >
                                        <ProjectsAccordionItem {...props} />
                                    </li>
                                )
                        })}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

class ProjectsAccordionItem extends React.Component {
    constructor(props) {
        super()
    }
    state = {
        opened: false,
    }

    render() {
        const {
            state: { opened },
        } = this

        return (
            <div
                {...{
                    className: `accordion-item, ${
                        opened && 'accordion-item--opened'
                    }`,
                    onClick: () => {
                        this.setState({ opened: !opened })
                    },
                }}
            >
                <div {...{ className: 'accordion-item__line' }}>
                    <h3 {...{ className: 'accordion-item__title' }}>
                        {this.props.name}
                    </h3>
                    <FaAngleRight className="accordion-item__icon" />
                </div>
                <div {...{ className: 'accordion-item__inner' }}>
                    <div {...{ className: 'accordion-item__content' }}>
                        <p {...{ className: 'accordion-item__paragraph' }}>
                            <ul className="App-ul">
                                <li>
                                    <FaGlobe className="App-icons" />
                                    <a href={this.props.url}>
                                        {this.props.url}
                                    </a>
                                </li>
                                <li>
                                    <FaGithubSquare className="App-icons" />
                                    <a href={this.props.githuburl}>
                                        Github Repo
                                    </a>
                                </li>
                                {(() => {
                                    if (this.props.has_diagram === true)
                                        return (
                                            <li>
                                                <FaProjectDiagram className="App-icons" />
                                                <a href={this.props.diagram}>
                                                    Project Diagram
                                                </a>
                                            </li>
                                        )
                                })()}

                                <li>
                                    <FaStickyNote className="App-icons" />
                                    {this.props.description}
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
