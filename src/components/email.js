const React = require('react');


const Email = ({email}) => {

    return (
        <a
        className = 'App-link'
        href={`mailto:${email}`}>
        {email}
        </a>);
};
module.exports = Email;