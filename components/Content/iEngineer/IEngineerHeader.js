import { storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";
import useMediaQuery from "@/components/Custom Hooks/MediaQueryHook";

const IEngineerHeader = ({ blok }) => {
    const matched = useMediaQuery("(max-width: 768px)");

    return (
        <div
            {...storyblokEditable(blok)}
            style={{ backgroundImage: matched ? `url(${blok?.bg_small.filename})` : `url(${blok?.background.filename})` }} // Change background image when browser width is < 768px
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