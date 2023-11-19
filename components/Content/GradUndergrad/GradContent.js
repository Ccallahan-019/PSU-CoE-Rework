import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const GradContent = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="flex flex-col gap-3 items-center xs:gap-4 md:gap-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center xl:gap-20" >
            <div className="relative aspect-[7/4] w-full max-w-[550px] rounded-lg md:shadow-2xl lg:order-last lg:justify-self-end">
                <img
                    className="absolute h-full w-full rounded-lg"
                    src={blok?.image?.filename}
                />
                <div className="absolute h-full w-full bg-gradient-to-bl from-[#001E44] to-45% rounded-lg"></div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 lg:max-w-[550px]">
                <p className="px-1 text-base font-robotoSlab xs:text-lg">
                    {blok?.description}
                </p>
                {blok?.button?.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
            </div>
        </div>
    );
};

export default GradContent;