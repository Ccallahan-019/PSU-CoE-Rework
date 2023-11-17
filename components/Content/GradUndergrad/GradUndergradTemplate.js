import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const GradUndergradTemplate = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            style={{ backgroundImage: `url(${blok?.background?.filename})` }}
            className="relative h-fit xs:h-[725px] bg-cover"
        >
            <div className="relative h-full py-4 xs:py-0 sm:px-2 lg:px-6 flex flex-col gap-2 sm:gap-4 md:gap-8 justify-center items-center text-center font-semibold">
                <h1 className="text-2xl xs:text-4xl text-blue-950 font-robotoSlab">
                    {blok?.header}
                </h1>
                <p className="text-base xs:text-xl px-1 sm:px-2 lg:px-32 font-robotoSlab">
                    {blok?.intro}
                </p>
                {blok?.content?.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
            </div>
        </div>
    );
};

export default GradUndergradTemplate;