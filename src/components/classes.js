import  React from "react";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Class to display collapsed content
 */
export class Collapsible extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          open: true
      }
      this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e){
      this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div className="collapsible">
        <div onClick={(e)=>this.togglePanel(e)} className="collapsibleTitle">
            <h3>
              {this.props.title} 
              <FontAwesomeIcon 
                icon={faSortDown} 
              />
            </h3> 
        </div>
        {this.state.open ? (
          <div className="collapsibleContent">
              {this.props.children}
          </div>
          ) : null
        }
      </div>
    );
  }
}

