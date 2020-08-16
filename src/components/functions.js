import { useEffect } from "react";
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
  const splitStringURL = stringURL.split("=");

  if(splitStringURL[0] === "?story"){
    return splitStringURL[1]
  } else {
    return null
  }
}

