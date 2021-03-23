import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Function to start at the top of a page onClick
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Function to parse the URL string
 * @param props - almost always this.props or this.props.routerHistory
 */
export function GetURLParams(props) {
  const stringURL = props.location.search;
  const splitURL = stringURL.split("=");
  const getStoryType = splitURL[0].split("&");
  const array = [getStoryType[0], splitURL[1]]  

  return array
}

/**
 * Function to display a tool tip over text
 * @param {string} props -> content of tooltip and text to display
 * @returns 
 */
export const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <span
      className="tooltipWrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <span className={`tooltipTip`}>
          {props.content}
        </span>
      )}
    </span>
  );
};