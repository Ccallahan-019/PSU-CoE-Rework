import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState } from "react";

const IEngineerSpotlight = ({ blok }) => {
    const [isClicked, setIsClicked] = useState(false); // State used to play video
    const playVideo = () => {
        setIsClicked(true);
    };

    return (
        <div>
            <div className="flex flex-col items-center bg-slate-200 lg:grid lg:grid-cols-2" {...storyblokEditable(blok)}>
                <div className="w-full flex justify-center items-center">
                    <div 
                        className="relative aspect-[5/4] w-full max-w-[580px]"
                        onClick={playVideo}>
                        <iframe
                            className="absolute w-full h-full"
                            src={isClicked ? blok?.iframe_source?.cached_url : ""}
                            frameBorder="0"
                            allow="autoplay; fullscreen">
                        </iframe>
                        <img className={isClicked ? "hidden" : "absolute w-full h-full"} src={blok?.spotlight_image?.filename} />
                    </div>
                </div>
                <div className="flex flex-col px-4 py-2 xs:py-4 sm:max-w-[580px] lg:gap-5 lg:self-center">
                    <div className="pb-1 flex flex-col gap-1 font-robotoSlab">
                        <h1 className="text-2xl font-bold xs:text-3xl">
                            {blok?.quote_first_line}
                        </h1>
                        <p className="text-lg xs:pb-1">
                            {blok?.quote}
                        </p>
                    </div>
                    <div className="text-lg">
                        <h1 className="uppercase font-bold font-robotoSlab">
                            {blok?.credit_name}
                        </h1>
                        <p className="pb-2 font-robotoSlab xs:pb-4 lg:pb-8">
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