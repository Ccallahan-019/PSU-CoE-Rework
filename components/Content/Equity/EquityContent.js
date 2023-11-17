import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const EquityContent = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            style= {{ backgroundImage: `url(${blok?.background?.filename})` }}
            className="h-fit xs:h-[725px] px-3 py-4 xs:py-0 xs:px-10 md:pl-20 md:pr-60 lg:pr-80 xl:pr-96 flex flex-col gap-5 justify-center text-white bg-cover bg-center bg-no-repeat lg:bg-start"
        >
            <h1 className="text-[#F79434] text-2xl xs:text-3xl font-semibold font-robotoSlab">
                {blok?.header}
            </h1>
            <p className="text-base xs:text-lg font-robotoSlab">
                {blok?.intro}
            </p>
            <p className="text-[#FDC692] text-lg xs:text-xl font-robotoSlab">
                {blok?.quote}
            </p>
            <div className="text-[#FDC692] text-lg xs:text-xl font-robotoSlab">
                <p className="uppercase font-semibold font-robotoSlab">
                    {blok?.credit_name}
                </p>
                <p className="pb-1 xs:pb-3 font-robotoSlab">
                    {blok?.credit_position}
                </p>
            </div>
            <div className="w-full flex justify-center">
                {blok?.button?.map((nestedblok) => (
                    <StoryblokComponent blok={nestedblok} key={nestedblok._uid} />
                ))}
            </div>
        </div>
    );
};

export default EquityContent;