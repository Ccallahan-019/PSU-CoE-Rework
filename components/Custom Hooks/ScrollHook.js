import { useState, useEffect } from "react";

const useScrollState = (pixels) => {

    const [Scrolled, setScrolled] = useState(false); // State used to capture whether or not the user has scrolled

    useEffect(() => {
        let scrollBoolean = window.scrollY > pixels ? true : false; //If the user has scrolled past the passed in number pixels, set variable to true

        if (scrollBoolean !== Scrolled) { //If 'scrollBoolean' is true, set scroll state to true
            setScrolled(scrollBoolean);
        };

        const scrollHandler = () => {
            scrollBoolean = window.scrollY > pixels ? true : false; //Check scrollY value
            setScrolled(scrollBoolean); //Change scroll state accordingly
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler); //Remove listener on unmount to avoid memory leaks
    });

    return Scrolled;
};

export default useScrollState;