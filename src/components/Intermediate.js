import React from'react';
import {Link} from 'react-router-dom';
import {allStories} from '../assets/data/storyList';
import { GetURLParams  } from './functions';
import uuid from 'react-uuid';
import Story from './Story';
import {Helmet} from 'react-helmet';

export default class Intermediate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      loaded: true
    };
  }

  componentDidMount(){
    this.setState({storyName: GetURLParams(this.props)});
    this.checkState();
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
      this.checkState();
    }
  }

  /**
   * Function to check the correct story is loading on URL change, and update if so
   */
  checkState = () => {
    this.setState({storyName: GetURLParams(this.props)});

    if(this.state.storyName === null){
      this.setState({loaded: false});
      return
    } else {
      this.setState({loaded: true, storyName: GetURLParams(this.props)});
      return
    }
  }

  /**
   * Function to reload the component on state change
   */
  refreshComponent = () => {
    this.setState(({ key }) => ({
      key: key + 1
    }));
  }

  /**
   * Function to return storyMenu if URL is not set
   */
  storyMenu = () => {

    return (
      <div>
          {/* Meta tags */}
          <Helmet>
            <title>Story Korean - Intermediate Stories for Korean Learners</title>
            <meta name="description" content="Intermediate Korean stories with English translations for Korean learners" />
            <meta name="keywords" content="Korean stories, 전래동화, Korean folk tales, Korean books, read Korean, 
            Korean fairy tales, Korean translations, StoryKorean.com, Intermediate korean, easy Korean, learn Korean, study Korean" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="StoryKorean.com" />
            {/* Twitter */}
            <meta name="twitter:card" value="Intermediate Korean stories with English translations for Korean learners"/>
            {/* Open Graph */}
            <meta property="og:title" content="Story Korean - Intermediate Stories for Korean Learners" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://www.storykorean.com/intermediate" />
            <meta property="og:description" content="Intermediate Korean stories with English translations for Korean learners" /> 
          </Helmet>

        <header className="headerTitle">
          <h1>Intermediate</h1>
          <p>
            Each intermediate story uses a mix of simple and intermediate grammar.
            <br/>
            This level is recommended for upper-beginner to intermediate level Korean learners.
          </p>
        </header>

        <div className="homeContent">
          <div className="levelSection">
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

  render(){
    return(
      <div key={this.state.key}>
        {this.state.storyName === null ? this.storyMenu() : <Story URL={this.state.storyName} type={'intermediateStories'}/>}
      </div>
    )
  }
}
