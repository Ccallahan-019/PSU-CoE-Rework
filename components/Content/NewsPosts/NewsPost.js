import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const NewsPost = ({ blok }) => {
    return (
        <div className="md:self-start" {...storyblokEditable(blok)}>
            <Link href={blok?.link.cached_url} className="w-auto max-w-[360px] xs:w-[360px] md:w-auto md:min-w-[340px] md:max-w-[360px] lg:min-w-[220px] flex flex-col gap-2 text-blue-900 hover:text-sky-500">
                <img
                    className="w-full"
                    src={blok?.image.filename}
                />
                <p className="text-center text-lg xs:text-xl">{blok?.caption}</p>
            </Link>
        </div>
    );
};

export default NewsPost;