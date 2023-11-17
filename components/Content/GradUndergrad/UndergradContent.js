import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const UndergradContent = ({ blok }) => {
    return (
        <div className="flex flex-col gap-2 xs:gap-4 md:gap-8 lg:gap-6 xl:gap-20 items-center lg:grid lg:grid-cols-2 lg:items-center" {...storyblokEditable(blok)}>
            <div className="relative aspect-[7/4] w-full max-w-[520px] lg:order-first lg:justify-self-end rounded-lg md:shadow-2xl">
                <img
                    className="absolute h-full w-full rounded-lg"
                    src={blok?.image?.filename}
                />
                <div className="absolute h-full w-full bg-gradient-to-br from-[#001E44] to-45% rounded-lg"></div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 lg:max-w-[480px] md:gap-6 text-lg">
                <p className="px-1 text-base xs:text-lg font-robotoSlab">
                    {blok?.description}
                </p>
                {blok?.button?.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
            </div>
        </div>
    );
};

export default UndergradContent;