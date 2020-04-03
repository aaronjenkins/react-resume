import { FaAngleRight } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

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

        //if (this.props.ative === true) {
            return (
                <div
                    {...{
                        className: `accordion-item, ${opened &&
                            'accordion-item--opened'}`,
                        onClick: () => {
                            this.setState({ opened: !opened })
                        },
                    }}
                >
                    <div {...{ className: 'accordion-item__line' }}>
                        <h3 {...{ className: 'accordion-item__title' }}>
                            {this.props.position}
                        </h3>
                        <FaAngleRight className="accordion-item__icon" />
                    </div>
                    <div {...{ className: 'accordion-item__inner' }}>
                        <div {...{ className: 'accordion-item__content' }}>
                            <p {...{ className: 'accordion-item__paragraph' }}>
                                <ul className="App-ul">
                                    <li>
                                        <a href={this.props.url}>
                                            {this.props.name}
                                        </a>
                                    </li>
                                    <li>
                                    <FaGithubSquare />
                                        <a href={this.props.githuburl}>
                                        </a>
                                    </li>
                                    <li>{this.props.description}</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            )
        //}
    }
}
