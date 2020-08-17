import React from'react';
import logo from '../assets/images/logo.png';
import {NavLink as Link} from 'react-router-dom';
import { faChevronDown , faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {allStories} from '../assets/data/storyList';
import uuid from 'react-uuid';

export default class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayGreeting: '',
      displayDeviceMenu: false,
      hideLogin: true,
      fixMenu: false,
    }
  }

  componentDidMount(){
    this.resizeNav();
    window.addEventListener("resize", this.resizeNav.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeNav.bind(this));
  }

  resizeNav() {
    if (window.innerWidth <= 760) {
      this.setState({displayDeviceMenu: true});
    }
  }

  //To display the menu onclick (for mobile)
  displayMenu = () => {
    this.setState({showMenu: true});
  }

  hideMenu = () => {
    this.setState({showMenu: false});
  }

  //hold the menu for the search bar while typing
  // fixMenu = () => {
  //   this.setState({fixMenu: true});
  // }

  render(){

    return(
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="StoryKorean logo"/>
          </Link>
        </div>

          {!this.state.displayDeviceMenu ?
            <div className="mainNavButtons">
              <div className="navDropdown">
                <Link to="/stories?beginner">
                  <button className="navDropBtn">
                    Beginner 
                    <FontAwesomeIcon className="navIcon" icon={faChevronDown}/>
                  </button>
                </Link>
                <div className="navDropdown-content">
                  {allStories['beginnerStories'].map((story) => {
                    return (
                      <Link to={story.link} key={uuid()}>
                        {story.title}
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="navDropdown">
                <Link to="/stories?intermediate">
                  <button className="navDropBtn">
                    Intermediate 
                    <FontAwesomeIcon className="navIcon" icon={faChevronDown}/>
                  </button>
                </Link>
                <div className="navDropdown-content">
                  {allStories['intermediateStories'].map((story) => {
                    return (
                      <Link to={story.link} key={uuid()}>
                        {story.title}
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="navDropdown">
                <Link to="/resources">
                  <button className="navDropBtn">
                    Resources 
                  </button>
                </Link>
              </div>

              <div className="navDropdown">
                <Link to="/about">
                  <button className="navDropBtn">
                    About 
                  </button>
                </Link>
              </div>

            </div>
          :
            <div onClick={this.displayMenu}>
              <FontAwesomeIcon icon={faBars} className="navBurger"/>
            </div>
          
          }

          {this.state.showMenu ? 
            <div id="visibleSideMenu">
              <h2>Menu</h2>
              <div className="mainNavButtons">
                

                <div className="navDropdown">
                <Link to="/stories?beginner">
                    <button className="navDropBtn">
                      Beginner 
                    </button>
                  </Link>
                </div>

                <div className="navDropdown">
                  <Link to="/stories?intermediate">
                    <button className="navDropBtn">
                      Intermediate 
                    </button>
                  </Link>
                </div>

                <div className="navDropdown">
                  <Link to="/resources">
                    <button className="navDropBtn">
                      Resources 
                    </button>
                  </Link>
                </div>

                <div className="navDropdown">
                  <Link to="/about">
                    <button className="navDropBtn">
                      About 
                    </button>
                  </Link>
                </div>

              </div>

            <div className="visibleCloseMenu" onClick={this.hideMenu}>
              Close Menu
            </div>

            </div>

          : null
          }

      </nav>
    )
  }
}