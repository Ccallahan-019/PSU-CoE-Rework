import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState, useRef } from "react";

const FacilitiesContent = ({ blok }) => {
    const [shown, setShown] = useState(false); // Hover state used to play video
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const ref = useRef(null);

    const handleVideo = () => {
        const changePlaying = !isVideoPlaying;
        setIsVideoPlaying(changePlaying);

        if (changePlaying) {
            setShown(true);
            ref.current.play();
        };
    };

    return (
        <div 
            {...storyblokEditable(blok)}
            style={{ backgroundImage: `url(${blok?.background?.filename})` }}
            className="py-2 flex flex-col gap-2 items-center text-white text-center font-robotoSlab bg-cover md:py-5 md:gap-4">
            <h1 className="px-1 text-2xl font-semibold sm:text-4xl sm:px-0">
                {blok?.header}
            </h1>
            <div className="relative aspect-video w-full max-w-[725px]">
                <video
                    className="absolute w-full h-full"
                    poster={blok?.video_poster?.filename}
                    ref={ref}
                    controls={shown ? true : false}
                >
                    <source
                        src={blok?.video?.filename}
                        type="video/mp4"
                    />
                    Video not supported
                </video>
                <div
                    onClick={handleVideo}
                    className={shown ? "hidden" : "absolute w-full h-full flex justify-center items-center text-3xl bg-black opacity-[0.7] cursor-pointer"}>
                    <img src={blok?.play_icon?.filename} alt={blok?.play_icon?.alt} className="h-36 w-40" />
                </div>
            </div>
            <p className="px-1 py-2 max-w-[700px] text-lg sm:text-xl md:px-0">
                {blok?.description}
            </p>
                {blok?.button?.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
        </div>
    );
};

export default FacilitiesContent;
