import { FaArrowRight } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
const React = require("react");


export class WorkAccordion extends React.Component {
    constructor(props) {
        super();
        }
  render () {
    return (
        <React.Fragment>
        <div {...{ className: 'wrapper' }}>
            <ul {...{ className: 'accordion-list' }}>
            {this.props.work.map((props, key) => {
                return (
                <li {...{ className: 'accordion-list__item', key }}>
                    <WorkAccordionItem {...props} />
                </li>
                )
            })}
            </ul>
        </div>
      </React.Fragment>
    )
  }
}

class WorkAccordionItem extends React.Component {
    constructor(props) {
        super();
        }
  state = {
    opened: false
  }
  
  render () {
    const {   
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {this.props.position}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                        <ul>
                            <li><a href={this.props.website}>{this.props.company}</a></li>
                            <li>{this.props.startDate}<FaArrowRight className="App-icons" />{this.props.endDate}</li>    
                        </ul>
                        <ul>
                        Highlights: 
                        {this.props.highlights.map(function(highlight) {
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
              </p>
            </div>
          </div>
      </div>
    )
  }
}