import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const FactSheet = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            style={{ backgroundImage: `url(${blok?.background.filename})` }}
            className="relative lg:h-80 pl-4 xs:pl-10 py-6 xs:py-10 md:pl-24 lg:px-10 flex flex-col lg:flex-row gap-12 xs:gap-14 lg:gap-8 justify-around bg-cover"
        >
            {blok?.facts.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
};

export default FactSheet;
