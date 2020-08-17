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
  const splitURL = stringURL.split("=");
  const getStoryType = splitURL[0].split("&");
  const array = [getStoryType[0], splitURL[1]]  

  return array
}