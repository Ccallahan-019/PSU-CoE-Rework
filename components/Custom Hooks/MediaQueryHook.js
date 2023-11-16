import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matched, setMatched] = useState(false); //State used to capture media matches value as it changes

    useEffect(() => {
      const mediaMatched = window.matchMedia(query); //Media query

      if (mediaMatched.matches !== matched) { //If screen size matches media query, set state to true
        setMatched(mediaMatched.matches);
      }

      const mediaHandler = () => {
        setMatched(mediaMatched.matches); //Event handler to change state if browser size changes to match query
      }

      window.addEventListener("resize", mediaHandler);
      return () => window.removeEventListener("resize", mediaHandler); //Remove listener on unmount to avoid memory leaks
    });
  return matched;
}

export default useMediaQuery;