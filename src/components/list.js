const React = require('react');


const List = ({name, list}) => {

    return (
        <React.Fragment>
        <h2>{name}</h2>
            <ul>
                {list.map(function(listValue){
                    return <li>{listValue.name}</li>;
                })}
            </ul>
        </React.Fragment>);
};
module.exports = List;