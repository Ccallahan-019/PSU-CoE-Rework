import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState } from "react";

const IEngineerSpotlight = ({ blok }) => {
    const containerShown = "absolute w-full h-[475px] flex justify-center items-center";
    const backgroundShown = "absolute w-full h-full flex justify-end bg-black opacity-60 transition-[height] duration-[300ms]";
    const videoShown = "z-[1] max-w-full xs:w-[710px] xs:h-[400px] lg:w-[755px] lg:h-[425px] transition-[height] duration-[700ms]";
    const closeButtonShown = "flex gap-[6px] items-center h-8 mr-2 md:mr-3 lg:mr-10 mt-1 lg:mt-2 uppercase text-white text-lg font-robotoSlab hover:font-semibold hover:opacity-[0.65]";

    const [clicked, isClicked] = useState(false); // State used to show or hide video
    const toggleVideo = () => {
        if (clicked) {
            isClicked(false);
        } else {
            isClicked(true);
        };
    };

    return (
        <div>
            <div className={clicked ? containerShown : "h-0 w-0"}>
                <div className={clicked ? backgroundShown : "h-0 w-0"}>
                    <button
                        onClick={toggleVideo}
                        className={clicked ? closeButtonShown : "hidden"}
                    >
                        <img
                            className="h-[14px] w-[14px] mt-[1px]"
                            src={blok?.close_image.filename}
                        />
                        Close
                    </button>
                </div>
                <iframe
                    className={clicked ? videoShown : "h-0 w-0"}
                    src={blok?.video.filename}
                    frameBorder="0" allow="fullscreen; picture-in-picture"
                ></iframe>
            </div>
            <div className="h-fit flex flex-col lg:grid lg:grid-cols-2 items-center bg-slate-300" {...storyblokEditable(blok)}>
                <div className="flex items-center justify-self-center">
                    <img
                        onClick={toggleVideo}
                        className={"max-h-[475px] cursor-pointer"}
                        src={blok?.spotlight_image.filename}
                    />
                </div>
                <div className="max-h-fit flex flex-col gap-2 lg:gap-5 xl:gap-8 px-6 py-5 md:px-20 lg:pl-5 lg:pr-12 xl:pr-28">
                    <div className="pb-2 flex flex-col gap-1 font-robotoSlab">
                        <h1 className="text-3xl font-bold">
                            {blok?.quote_first_line}
                        </h1>
                        <p className="text-lg">
                            {blok?.quote}
                        </p>
                    </div>
                    <div className="text-lg">
                        <h1 className="uppercase font-bold font-robotoSlab">
                            {blok?.credit_name}
                        </h1>
                        <p className="pb-3 lg:pb-8 xl:pb-10 font-robotoSlab">
                            {blok?.credit_position}
                        </p>
                        <div className="h-fit flex justify-center">
                            {blok?.button.map((nestedBlok) => (
                                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IEngineerSpotlight;