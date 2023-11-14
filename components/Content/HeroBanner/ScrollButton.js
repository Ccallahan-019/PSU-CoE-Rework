import { storyblokEditable } from "@storyblok/react";
import { useEffect } from "react";

const ScrollButton = ({ blok }) => {
    useEffect(() => {
        const scrollButton = document.getElementById("scrollButton");

        const scrollOnClick = () => {
            window.scrollBy({
                top: 730,
                behavior: "smooth",
            });
        }

        scrollButton.addEventListener("click", scrollOnClick);
    })

    return (

                <div className="h-32 flex flex-col justify-center items-center" {...storyblokEditable(blok)}>
                    <img
                        className="w-16 h-16 animate-bounce"
                        src={blok?.arrow.filename}
                    />
                    <button
                        id="scrollButton"
                        className="mt-[-12px] text-white text-sm hover:text-base uppercase font-roboto"
                    >
                        {blok?.button_text}
                    </button>
                </div>
    );
};

export default ScrollButton;