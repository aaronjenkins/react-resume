const React = require('react')

const List = ({ name, list}) => {
    return (
        <React.Fragment>
            <span className='App-list-title'>{name}</span>
            <ul className = "App-ul">
                {list.map(function(listValue) {
                    return <li>{listValue.name}</li>
                })}
            </ul>
        </React.Fragment>
    )
}
module.exports = List
