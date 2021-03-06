import React,  { Suspense, lazy } from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";
import '../src/style/App.css';
import { 
  Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Navigation from '../src/components/Navigation';
// import Home from '../src/components/Home';
import {ScrollToTop} from '../src/components/functions';
// import Resources from '../src/components/Resources';
// import Stories from './components/Stories';
import AdSense from "react-adsense";

const Resources = lazy(() => import('../src/components/Resources'));
const Home = lazy(() => import('../src/components/Home'));
const Stories = lazy(() => import('../src/components/Stories'));

ReactGA.initialize("UA-144657526-1");
const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname + location.search);
});

class App extends React.Component {

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <Router history={history}>
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

          <Suspense fallback={<div className="loadingCenter"><h2>Loading <span className="ellipsisAnim"><span>.</span><span>.</span><span>.</span></span></h2></div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/stories" component={Stories}/>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Suspense>
          <AdSense.Google
              client='ca-pub-1231732280212130'
              slot='2466254427'
              style={{ display: 'block' }}
              layout='in-article'
              format='fluid'
              responsive='true'
            />
            
          <AdSense.Google
            client='ca-pub-1231732280212130'
            slot='4214675708'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
          />

          <Footer /> 
        </div>

      </Router>
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
    The content of this website belongs to StoryKorean.com. Copyright © 2019-2021, StoryKorean. All Rights Reserved.
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
          <br/>
          Please feel free to leave a comment or suggestion about the site using the box below.
        </p>

        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
            <label>Your Name: <input type="text" name="name"/></label>
            <label>Your Email: <input type="email" name="email"/></label>
            <label>Message: <textarea name="message"></textarea></label>
            <button type="submit">Send</button>
        </form>

    </div>
  )
}