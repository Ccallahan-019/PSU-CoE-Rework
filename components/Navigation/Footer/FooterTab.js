import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const FooterTab = ({ blok }) => {
    return (
        <Link 
            href={blok?.link?.cached_url}
            className="w-fit h-full flex items-center col-span-2 border-slate-400 md:pr-3 md:border-r-[1px] hover:underline hover:underline-offset-2"
            {...storyblokEditable(blok)}>
            <p>
                {blok?.name}
            </p>
        </Link>
    );
};

export default FooterTab;