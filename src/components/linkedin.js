import { FaLinkedin } from 'react-icons/fa';

const React = require('react');

export class LinkedIn extends React.Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <React.Fragment>
                <span>
                <a
                href={this.props.url}>
                <FaLinkedin 
                    className = 'react-icons-clickable'/>
                </a>
                </span>
            </React.Fragment>);
    }
}