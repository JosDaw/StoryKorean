import React from'react';
import {Link} from 'react-router-dom';
import {allStories} from '../assets/data/storyList';
import uuid from 'react-uuid';

export default class Home extends React.Component{
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
          <h1>StoryKorean</h1>
          <h3>
            Improve your Korean skills with traditional Korean stories
          </h3>
          <p> Pick a level and begin reading!</p>
        </header>

        <div className="homeContent">
          <div className="levelSection">
            <h1>
              <Link to="/beginner">
                Beginner
              </Link>
            </h1>


            {allStories['beginnerStories'].map((story)=>{
              return (
                <Link to={story.link} key={uuid()} onClick={this.refreshComponent}>
                  <div className="levelSectionStory">
                    <img src={story.imageLink} alt={story.title}/>
                    <p>
                      {story.koTitle}
                      <br/>
                      {story.title}
                    </p>
                  </div>
                </Link>
              )
            })}

          </div>

          <div className="levelSection">
            <h1>
            <Link to="/intermediate">Intermediate</Link>
            </h1>
           

            {allStories['intermediateStories'].map((story)=>{
              return (
                <Link to={story.link} key={uuid()} onClick={this.refreshComponent}>
                  <div className="levelSectionStory">
                    <img src={story.imageLink} alt={story.title}/>
                    <p>
                      {story.koTitle}
                      <br/>
                      {story.title}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </div>
    )
  }
}