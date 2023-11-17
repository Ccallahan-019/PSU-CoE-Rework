import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState } from "react";

const IEngineerSpotlight = ({ blok }) => {
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
            <div className="h-fit flex flex-col lg:grid lg:grid-cols-2 items-center bg-slate-200" {...storyblokEditable(blok)}>
                <div className="w-full h-[300px] xxs:h-[425px] xs:h-[530px] flex items-center justify-center bg-gradient-to-br from-slate-500 from-30% via-slate-400 via-[65%] to-slate-600 to-100%">
                    <img
                        onClick={toggleVideo}
                        className={clicked ? "h-auto w-0" : "w-full apsect-[1/1] max-w-[560px] cursor-pointer"}
                        src={blok?.spotlight_image?.filename}
                    />
                    <div className={clicked ? "w-full h-full flex flex-col gap-3 justify-center transition-[width] duration-[800ms]" : "w-0 h-full flex flex-col gap-2 justify-center"}>
                        <div className="w-full flex justify-end">
                            <button
                                onClick={toggleVideo}
                                className="pr-1 md:pr-1.5 flex gap-1 items-center hover:font-semibold hover:opacity-[0.7]"
                            >
                                <img
                                    className="h-[12px] w-[12px] mt-[2px]"
                                    src={blok?.close_image?.filename}
                                />
                                <p className={clicked ? "text-white uppercase font-robotoSlab" : "hidden" }>
                                    Close
                                </p>
                            </button>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <iframe
                                className="w-full h-[155px] xxs:h-[200px] xs:h-[260px] sm:h-[360px] md:h-[430px] lg:h-[280px] xl:h-[350px] 2xl:h-[425px]"
                                src="https://player.vimeo.com/video/761896858?h=2a50b9899d&title=0&byline=0"
                                allow="fullscreen; picture-in-picture">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="max-h-fit flex flex-col gap-2 lg:gap-5 xl:gap-8 px-6 py-5 md:px-20 lg:self-center">
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
                            {blok?.button?.map((nestedBlok) => (
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