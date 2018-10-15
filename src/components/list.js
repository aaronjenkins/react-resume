const React = require('react');


const List = ({name, list}) => {

    return (
        <React.Fragment>
        <h4>{name}</h4>
            <ul className='right'>
                {list.map(function(listValue){
                    return <li>{listValue.name}</li>;
                })}
            </ul>
        </React.Fragment>);
};
module.exports = List;