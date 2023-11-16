import { storyblokEditable } from "@storyblok/react";
import { useEffect } from "react";
import useMediaQuery from "@/components/Custom Hooks/MediaQueryHook";

const ScrollButton = ({ blok }) => {
    const media = useMediaQuery("(max-height: 800px)")

    useEffect(() => {
        const scrollButton = document.getElementById("scrollButton");
        const bottomDiv = document.getElementById("bottomDiv")
        const divStartingTop = bottomDiv.getBoundingClientRect().top;

        const scrollHandler = () => { //Smooth scroll to the bottom of the scroll button element
            const scrollValue = media ? (divStartingTop - 49) : (divStartingTop - 74);
            window.scrollTo({top: scrollValue, behavior: "smooth"});
        };

        scrollButton.addEventListener("click", scrollHandler);
    });

    return (
        <div>
            <div className="h-56 xs:h-32 flex flex-col gap-4 xs:gap-2 justify-center items-center" {...storyblokEditable(blok)}>
                <img
                    className="w-12 animate-bounce"
                    src={blok?.arrow.filename}
                />
                <button
                    id="scrollButton"
                    className=" text-white text-sm hover:text-base uppercase font-roboto"
                >
                    {blok?.button_text}
                </button>
            </div>
            <div id="bottomDiv"></div>
        </div>

    );
};

export default ScrollButton;