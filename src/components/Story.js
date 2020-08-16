import React from'react';
import {allStories} from '../assets/data/storyList';
import uuid from 'react-uuid';
import ShowEnglish from './ShowEnglish';
import { connect } from "react-redux";
import {Helmet} from 'react-helmet';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStoryTitle: '',
      currentStoryKoreanTitle: '',
      currentStoryContent: 0,
      currentStoryGrammar: [],
      currentStoryVocab: [],
      currentStoryQuestions: [],
      storyLoaded: false,
      selectedOption: 0,
      fontSize: 'regularFont'
    }
  }
  
  componentDidMount(){
    this.fetchStory();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.URL !== prevProps.URL){
      this.fetchStory();
    }
  }

  /**
   * Function to fetch the correct story information
   */
  fetchStory = () => {

    for(let i =0; i< allStories['beginnerStories'].length; i++){
      const urlParse = allStories['beginnerStories'][i].link;
      const splitStringURL = urlParse.split("=");
      const storyName = splitStringURL[1];

      if(storyName === this.props.URL)
      {
        this.setState({
          currentStoryTitle: allStories['beginnerStories'][i].title, 
          currentStoryKoreanTitle: allStories['beginnerStories'][i].koTitle,
          currentStoryContent: allStories['beginnerStories'][i].chapters,
          currentStoryVocab: allStories['beginnerStories'][i].vocabList,
          currentStoryGrammar: allStories['beginnerStories'][i].grammarTip,
          currentStoryQuestions: allStories['beginnerStories'][i].quiz,
          storyLoaded: true
        })
        return
      } 
    }
  }

/**
 * Function to separate out the English & Korean text
 * @param {string} chapter - each chapter in the storyList from generateChapters
 * @returns {array} - array of arrays of Korean & English
 */
  parseStoryText = (chapter) => {
    // const engRegex = /^...[a-zA-Z]|^[a-zA-Z]/g;
    const endLineRegex = /(\.$|’$|"$)/gm;
    const englishArray = [];
    const koreanArray = [];
    for(let i = 0; i< chapter.length; i++){
      let replaceString = chapter[i].replace(endLineRegex, "$1\n");
      if(i % 2 ){
        englishArray.push(replaceString);
      } else {
        koreanArray.push(replaceString);
      }
    }
    const bothArray = [koreanArray, englishArray];
    return bothArray
  }

  /**
   * Function to generate the number of chapters available
   */
  generateChapters = () => {
    const chapters = this.state.currentStoryContent.map((chapter, index) => {
      const chapNum = index+1;
      const grammar = this.state.currentStoryGrammar[index];
      const fontSize = this.state.fontSize;
      let vocab = [];
      for (const property in this.state.currentStoryVocab[index]) {
        vocab.push(`${this.state.currentStoryVocab[index][property]} - ${property} \n`);
      }
    
      return (
        <div className={`${fontSize} storyChapter`} key={uuid()}>
          <h3>Chapter {chapNum}</h3>
          <div className="storyText">
            <p className={`${fontSize} koreanText`}>
              {this.parseStoryText(chapter)[0]}
            </p>
            {this.props.showEng ? 
              <p className={`${fontSize} engText`}>{this.parseStoryText(chapter)[1]}</p>
            : null}
          </div>

          <div className="storyLearning">
            <div className="vocabList">
              <h4>Vocab List</h4>
              <p>{vocab}</p>
            </div>

            <div className="grammarTip">
              <h4>Grammar Tip</h4>
              <p>
                Example: <span className="koreanText">{grammar['example']}</span>
                <br/>
                <span>{grammar['transExample']}</span>
                <br/>
                {grammar['grammarExpl']}

              </p>                
              <button>
                <a href={grammar['grammarLink']}>More Grammar Info</a>
              </button>
            </div>
          </div>
        </div>
      )
    })
    return chapters
  }

  /**
   * Function to generate the quiz questions
   */
  generateQuiz = () => {

    const questions = this.state.currentStoryQuestions.map((question, index) => {
      const quNum = index+1;

      return (
        <form key={uuid()}>
          <h3>{quNum}. {question.question}</h3>
          <label htmlFor={`question${index}`}>
            <input 
              type="radio" 
              name={`question${index}`} 
              value={question.option1}
              checked={this.state.selectedOption === question.option1}
              onChange={this.handleQuizAnswer}
            />
            {question.option1}
          </label>
          <label htmlFor={`question${index}`}>
            <input               
              type="radio" 
              name={`question${index}`} 
              value={question.option2}
              checked={this.state.selectedOption === question.option2}
              onChange={this.handleQuizAnswer}
            />
            {question.option2}
          </label>
          <label htmlFor={`question${index}`}>
            <input 
              type="radio" 
              name={`question${index}`} 
              value={question.option3}
              checked={this.state.selectedOption === question.option3}
              onChange={this.handleQuizAnswer}
            />
            {question.option3}
          </label>
          <label htmlFor={`question${index}`}>
            <input 
              type="radio" 
              name={`question${index}`} 
              value={question.option4}
              checked={this.state.selectedOption === question.option4}
              onChange={this.handleQuizAnswer}
            />
            {question.option4}
          </label>

          {this.state.selectedOption === question.answer ? 
            <h3>
              Correct!
            </h3>
           : 
            null
          }

          {this.state.selectedOption !== question.answer && this.state.selectedOption !== 0 ? 
           <h3>
             Incorrect! Please try again!
           </h3>
           : 
            null
          }
          
        </form>

      )
    })

    const questionContainer = <div className="storyQuiz">
                                <h2>Story Quiz!</h2>

                                {questions}
                              </div>

    return questionContainer
  }

  /**
   * Function to check the answer
   */
  handleQuizAnswer = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  render(){
   
    return (
      <div className="storyMain">
        <Helmet>
          <title>Story Korean - {this.state.currentStoryTitle}</title>
          <meta name="description" content={`${this.state.currentStoryTitle} - ${this.state.currentStoryKoreanTitle}
            A short story in Korean and English.`} />
          <meta name="keywords" content={`${this.state.currentStoryTitle}, ${this.state.currentStoryKoreanTitle}, 
          Korean stories, 전래동화, Korean folk tales, Korean books, read Korean, Korean fairy tales, Korean translations,
           StoryKorean.com, beginner korean, easy Korean, learn Korean, study Korean`} />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="StoryKorean.com" />
          {/* Twitter */}
          <meta name="twitter:card" value={`${this.state.currentStoryTitle} - ${this.state.currentStoryKoreanTitle}
              A short story in Korean and English.`}/>
          {/* Open Graph */}
          <meta property="og:title" content={`Story Korean - ${this.state.currentStoryTitle}`} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://www.storykorean.com/beginner?story=${this.props.URL}`} />
          <meta property="og:description" content={`${this.state.currentStoryTitle} - ${this.state.currentStoryKoreanTitle}
            A short story in Korean and English.`} /> 
        </Helmet>

        <header className="headerTitle">
          <h1 className="koreanText">{this.state.currentStoryKoreanTitle}</h1>
          <h2>{this.state.currentStoryTitle}</h2>
        </header>

        <div className="fontAdjust">
          <p>Adjust Font Size: </p>
          <button onClick={()=> {this.setState({fontSize: 'regularFont'})}}>Regular</button>
          <button onClick={()=> {this.setState({fontSize: 'largeFont'})}}>Large</button>
          <button onClick={()=> {this.setState({fontSize: 'xLargeFont'})}}>X-Large</button>
        </div>

        <div className={`storyContent`}>
          {this.state.storyLoaded ? this.generateChapters() : null}
          {this.state.storyLoaded ? this.generateQuiz() : null}
        </div>

        <ShowEnglish />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showEng: state.showHideEng.showEng
});

export default connect(mapStateToProps)(Story);