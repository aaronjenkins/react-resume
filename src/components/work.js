import { FaBriefcase } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { Card } from "./card";
import { CardStack } from "./cardstack";


const React = require("react");

export class Work extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <CardStack>
          {this.props.work.map(function(listValue) {
            return (
                <Card background={listValue.color}>
                  <ul>
                    <FaBriefcase className="App-icons" />
                    <a href={listValue.website}>{listValue.company}</a>
                    <ul>
                      <li>{listValue.position}</li>
                      <li>
                        {listValue.startDate}
                        <FaArrowRight className="App-icons" />
                        {listValue.endDate}
                      </li>
                      <li>Highlights: </li>
                      {listValue.highlights.map(function(highlight) {
                        return (
                          <React.Fragment>
                            <ul>
                              <li>
                                <FaDotCircle className="App-icons" />
                                {highlight}
                              </li>
                            </ul>
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </ul>
                </Card>
            );
          })}
        </CardStack>
      </React.Fragment>
    );
  }
}
