import { storyblokEditable } from "@storyblok/react";
import { useEffect } from "react";

const ScrollButton = ({ blok }) => {
    useEffect(() => {
        const scrollButton = document.getElementById("scrollButton");
        const bottomDiv = document.getElementById("bottomDiv")
        const divStartingTop = bottomDiv.getBoundingClientRect().top;

        const scrollHandler = () => { //Smooth scroll to the bottom of the scroll button element
            window.scrollTo({top: divStartingTop, behavior: "smooth"});
            console.log(divStartingTop);
        };

        scrollButton.addEventListener("click", scrollHandler);
    });

    return (
        <div>
            <div className="mt-5 mb-16 sm:mb-8 h-fit flex flex-col justify-center items-center" {...storyblokEditable(blok)}>
                <div className="">
                <img
                    className="w-12 animate-bounce"
                    src={blok?.arrow.filename}
                />
                </div>
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