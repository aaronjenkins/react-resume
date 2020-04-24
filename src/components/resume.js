import { FaSave } from 'react-icons/fa'

const React = require('react')

export class Resume extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <span>
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                        <FaSave className="App-icons-clickable" />
                    </a>
                </span>
            </React.Fragment>
        )
    }
}
