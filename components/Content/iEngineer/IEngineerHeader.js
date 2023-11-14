import { storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";

const IEngineerHeader = ({ blok }) => {
    const mediaMatch = window.matchMedia('(max-width: 768px)'); // Media query for detecting browser window width
    const [ismatched, setIsMatched] = useState(mediaMatch.matches); // State used to capture boolean value corresponding to media query

    useEffect(() => {
        const mediaHandler = (event) => {
            setIsMatched(event.matches); // Set state according to boolean value of matches property
        };
        
        mediaMatch.addEventListener("change", mediaHandler); // Add listener to detect changes in browser width
        return () => mediaMatch.removeEventListener("change", mediaHandler); // Remove listener to avoid memory leaks
    });
    
    return (
        <div
            {...storyblokEditable(blok)}
            style={{ backgroundImage: ismatched ? `url(${blok?.bg_small.filename})` : `url(${blok?.background.filename})` }} // Change background image when browser width is < 768px
            className="ml-[-45px] xs:ml-0 md:ml-[-60px] lg:ml-[-30px] h-[550px] md:h-[230px] xl:h-[250px] px-4 pb-8 md:pl-[230px] lg:pl-[250px] xl:pl-[21vw] lg:pr-10 xl:pr-24 md:pb-0 flex flex-col gap-3 justify-end md:justify-center text-white font-robotoSlab bg-cover bg-no-repeat xl:bg-center"
        >
            <h1 className="ml-[45px] xs:ml-0 text-4xl xs:text-5xl uppercase">
                {blok?.header}
            </h1>
            <p className="ml-[45px] xs:ml-0 text-base xs:text-lg">
                {blok?.description}
            </p>
        </div>
    );
};

export default IEngineerHeader;