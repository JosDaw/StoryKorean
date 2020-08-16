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
import Footer from '../src/components/Footer';
import {ScrollToTop} from '../src/components/functions';
import Beginner from '../src/components/Beginner';
import About from '../src/components/About';
import Resources from '../src/components/Resources';

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
            <Route path="/beginner" component={Beginner} />
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

