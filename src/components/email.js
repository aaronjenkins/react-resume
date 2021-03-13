import { FaEnvelopeSquare } from 'react-icons/fa'

const React = require('react')

export class Email extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <span>
                    <a className="App-link" href={`mailto:${this.props.email}`}>
                    <FaEnvelopeSquare className="App-icons-clickable" />
                    </a>
                </span>
            </React.Fragment>
        )
    }
}
