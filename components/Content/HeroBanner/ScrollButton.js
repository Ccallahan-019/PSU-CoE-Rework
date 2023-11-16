import { storyblokEditable } from "@storyblok/react";
import { useEffect } from "react";

const ScrollButton = ({ blok }) => {
    useEffect(() => {
        const scrollButton = document.getElementById("scrollButton");
        const bottomDiv = document.getElementById("bottomDiv")
        const divStartingTop = (bottomDiv.getBoundingClientRect().top - 35);

        const scrollHandler = () => { //Smooth scroll to the bottom of the scroll button element
            window.scrollTo({top: divStartingTop, behavior: "smooth"});
            console.log(divStartingTop);
        };

        scrollButton.addEventListener("click", scrollHandler);
    });

    return (
        <div>
            <div className="h-[30vh] xs:h-32 flex flex-col gap-2 justify-center items-center" {...storyblokEditable(blok)}>
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