import React from 'react';
import '../src/style/App.css';
import { 
  BrowserRouter,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Navigation from '../src/components/Navigation';
import Home from '../src/components/Home';
import {ScrollToTop} from '../src/components/functions';
import Resources from '../src/components/Resources';
import Stories from './components/Stories';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app">
          {/* Meta tags */}
          <Helmet>
            <title>Story Korean - Stories for Korean Learners</title>
            <meta name="description" content="Korean stories with English translations for Korean learners" />
            <meta name="keywords" content="Korean stories, 전래동화, Korean folk tales, Korean books, read Korean, 
            Korean fairy tales, Korean translations, StoryKorean.com, beginner korean, learn Korean, study Korean" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="StoryKorean.com" />
            {/* Twitter */}
            <meta name="twitter:card" value="Korean stories with English translations for Korean learners"/>
            {/* Open Graph */}
            <meta property="og:title" content="Story Korean - Stories for Korean Learners" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://www.storykorean.com/" />
            <meta property="og:description" content="Korean stories with English translations for Korean learners" /> 
          </Helmet>

          <ScrollToTop />
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/stories" component={Stories}/>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <Footer /> 
        </div>

      </BrowserRouter>
    )
  }
}
 

export default App;

//For 404
function NoMatch() {
  let location = useLocation();

  return (
    <div id="pageNotFound">
      <h3>
        Page Not Found: {location.pathname}
      </h3>
    </div>
  );
}

function Footer() {
  return (
    <footer>
    <p className="copyright">
    The content of this website belongs to StoryKorean.com. Copyright © 2019-2020, StoryKorean. All Rights Reserved.
    </p>
  </footer>
  )
}

function About() {
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