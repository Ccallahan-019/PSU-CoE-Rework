import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const HotlineButton = ({ blok }) => {
    return (
        <Link href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
            <button className="px-3 xs:px-[28px] hover:px-[13.5px] xs:hover:px-[29.6px] hover:py-[1.5px] border-2 border-solid border-black hover:border-none text-sm xs:text-base text-sky-200 hover:text-white uppercase italic font-bold bg-black hover:bg-gradient-to-bl from-slate-600 via-slate-500 to-slate-800 hover:shadow-2xl">
                {blok?.name}
            </button>
        </Link>
    );
};

export default HotlineButton;