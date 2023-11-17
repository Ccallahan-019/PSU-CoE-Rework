import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const SocialMedia = ({ blok }) => {
    return (
        <div className="xs:pr-3 sm:pr-10 flex gap-3 xs:gap-4 items-center justify-end uppercase font-robotoSlab font-semibold" {...storyblokEditable(blok)}>
            <p className="align-center">
                {blok?.tagline}
            </p>
            {blok?.media_links?.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
};

export default SocialMedia;