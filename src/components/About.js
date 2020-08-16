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
      <div className="about">
        <header className="headerTitle">
          <h1>About StoryKorean</h1>
        </header>

          <p>
            This website collects Korean stories to help learners to read Korean. 
            <br/>
            The content of this website cannot be used without permission. 
          </p>
          <button>
            <a href="mailto:josmdaw@gmail.com">Send an Email?</a>
          </button>
      </div>
    )
  }
}