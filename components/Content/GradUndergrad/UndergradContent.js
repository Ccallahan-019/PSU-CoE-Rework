import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const UndergradContent = ({ blok }) => {
    return (
        <div className="xl:px-20 flex flex-col gap-2 xs:gap-4 md:gap-8 lg:gap-6 xl:gap-20 items-center lg:grid lg:grid-cols-2 lg:items-center" {...storyblokEditable(blok)}>
            <img
                className="h-[200px] w-[380px] sm:h-[250px] lg:h-[300px] w-[430px] lg:w-[500px] lg:order-first lg:justify-self-end rounded md:shadow-2xl"
                src={blok?.image.filename}
            />
            <div className="flex flex-col gap-2 md:gap-4 lg:max-w-[500px] md:gap-6 text-lg">
                <p className="px-1 text-base xs:text-lg font-robotoSlab">
                    {blok?.description}
                </p>
                {blok?.button.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
            </div>
        </div>
    );
};

export default UndergradContent;