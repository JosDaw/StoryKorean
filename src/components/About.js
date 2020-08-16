import React from'react';

export default class About extends React.Component{
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
          <h1>About StoryKorean</h1>
        </header>

        <div className="homeContent">
        <p>
          This website collects Korean stories to help learners to read Korean. 
          The content of this website cannot be used without permission from the website owner. 
        </p>
        </div>
      </div>
    )
  }
}