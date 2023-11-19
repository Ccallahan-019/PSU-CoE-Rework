import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const GradUndergradButton = ({ blok }) => {
    return (
        <Link href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
            <button className="px-10 py-2 text-base text-blue-900 uppercase italic font-bold border-2 border-blue-900 hover:px-[42px] hover:py-[9.5px] hover:shadow-2xl hover:text-slate-200 hover:border-none bg-slate-100 hover:bg-gradient-to-bl from-slate-600 via-slate-500 to-slate-800 hover:drop-shadow-2xl sm:text-lg">
                {blok?.name}
            </button>
        </Link>
    );
};

export default GradUndergradButton;