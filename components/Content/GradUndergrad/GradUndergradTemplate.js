import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const GradUndergradTemplate = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            style={{ backgroundImage: `url(${blok?.background?.filename})` }}
            className="bg-cover lg:h-[725px]">
            <div className="h-full py-4 flex flex-col gap-3 justify-center items-center text-center font-semibold sm:px-2 sm:gap-4 md:gap-8 lg:px-5">
                <h1 className="text-2xl text-blue-950 font-robotoSlab xs:text-4xl">
                    {blok?.header}
                </h1>
                <p className="px-1 text-base font-robotoSlab xs:text-xl xl:px-20">
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