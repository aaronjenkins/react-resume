import { FaGithubSquare } from 'react-icons/fa';

const React = require('react');

export class GitHub extends React.Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <React.Fragment>
                <span>
                <a
                href={this.props.url}>
                <FaGithubSquare 
                    className = 'react-icons-clickable'/>
                </a>
                </span>
            </React.Fragment>);
    }
}