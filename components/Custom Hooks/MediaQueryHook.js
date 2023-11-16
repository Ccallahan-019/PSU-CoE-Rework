import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matched, setMatched] = useState(false);

    useEffect(() => {
      const mediaMatched = window.matchMedia(query);

      if (mediaMatched.matches !== matched) {
        setMatched(mediaMatched.matches);
      }

      const mediaHandler = () => {
        setMatched(mediaMatched.matches)
    }
      window.addEventListener("resize", mediaHandler);

      return () => window.removeEventListener("resize", mediaHandler);
    });

    return matched;
}

export default useMediaQuery;