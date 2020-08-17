import  React from "react";
import { connect } from "react-redux";
import {showEnglish} from '../actions/actions';

/**
 * Class to toggle the display of english on/off
 */
class ShowEnglish extends React.Component{
  constructor(props) {
    super(props);
    this.toggleEnglish = this.toggleEnglish.bind(this);
  }

  toggleEnglish = () => {
    this.props.dispatch(showEnglish(!this.props.showEng))
  }

  render(){
    return (
      <div className="showEnglishContainer">
        <div className="showEngDirections">Click the button to see the English translation!</div>
        <button className="showEnglishBtn" onClick={()=>{this.toggleEnglish()}}>
          {this.props.showEng ? "Hide English" : "Show English"}
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showEng: state.showHideEng.showEng
});

export default connect(mapStateToProps)(ShowEnglish);