import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const NewsPost = ({ blok }) => {
    return (
        <div className="md:self-start" {...storyblokEditable(blok)}>
            <Link href={blok?.link?.cached_url} className="w-auto max-w-[340px] flex flex-col gap-2 items-center text-blue-900 hover:text-sky-500">
                <img
                    className="aspect-[1/1] w-full max-w-[340px]"
                    src={blok?.image?.filename}
                />
                <p className="w-full text-center text-lg xs:text-xl">{blok?.caption}</p>
            </Link>
        </div>
    );
};

export default NewsPost;