import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const IEngineer = ({ blok }) => {
    return (
        <div className="max-h-fit" {...storyblokEditable(blok)}>
            {blok?.content.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
};

export default IEngineer;