const React = require('react')

const List = ({list}) => {
    return (
        <React.Fragment>
            <ul className = "App-ul">
                {list.map(function(listValue) {
                    return <li>{listValue.name}</li>
                })}
            </ul>
        </React.Fragment>
    )
}
module.exports = List
