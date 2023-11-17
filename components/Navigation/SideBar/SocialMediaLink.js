import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const SocialMediaLink = ({ blok }) => {
    return (
        <Link href={blok?.link?.cached_url} target="_blank" {...storyblokEditable(blok)}>
            <img
                className="h-[25px] w-[25px]"
                src={blok?.icon?.filename}
            />
        </Link>
    );
};

export default SocialMediaLink;