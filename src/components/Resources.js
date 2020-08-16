import React from'react';

export default class Resources extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      place: "top",
      effect: "solid",
    };
  }

  render(){
    return(
      <div>
        <header className="headerTitle">
          <h1>Resources</h1>
        </header>

        <div className="homeContent">


        </div>
      </div>
    )
  }
}