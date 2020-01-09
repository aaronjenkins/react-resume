import { FaEnvelope } from 'react-icons/fa'

const React = require('react')

export class Email extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <span>
                    <FaEnvelope className="App-icons" />
                    <a className="App-link" href={`mailto:${this.props.email}`}>
                        {this.props.email}
                    </a>
                </span>
            </React.Fragment>
        )
    }
}
