import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const FactSheet = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            style={{ backgroundImage: `url(${blok?.background?.filename})` }}
            className="relative mt-[-2px] pl-4 py-6 flex flex-col gap-12 justify-around bg-cover xs:pl-10 xs:py-10 xs:gap-14 md:pl-24 lg:h-80 lg:px-10 lg:flex-row lg:gap-8"
        >
            {blok?.facts?.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
};

export default FactSheet;
