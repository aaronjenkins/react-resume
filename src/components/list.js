const React = require("react");

const List = ({ name, list }) => {
  return (
    <React.Fragment>
      {name}
      <ul>
        {list.map(function(listValue) {
          return <li>{listValue.name}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};
module.exports = List;
