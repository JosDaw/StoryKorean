import React from'react';
import '../style/App.css';

export default class Footer extends React.Component{

  render(){
    return(
      <footer>
        <p className="copyright">
        The content of this website belongs to StoryKorean.com. Copyright © 2019-2020, StoryKorean. All Rights Reserved.
        </p>
      </footer>
    )
  }
}