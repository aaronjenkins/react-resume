const React = require('react')

const List = ({list}) => {
    return (
        <React.Fragment>
            <ul className = "App-ul">
                {list.map(function(listItem) {
                    return <li>{listItem}</li>
                })}
            </ul>
        </React.Fragment>
    )
}
module.exports = List
