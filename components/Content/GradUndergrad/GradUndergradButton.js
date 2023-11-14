import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const GradUndergradButton = ({ blok }) => {
    return (
        <Link href={blok?.link.cached_url}>
            <button className="h-14 hover:shadow-2xl px-[24px] hover:px-[25px] text-base sm:text-lg text-blue-900 hover:text-slate-200 uppercase italic font-bold border-2 border-blue-900 hover:border-none bg-slate-100 hover:bg-gradient-to-bl from-slate-600 via-slate-500 to-slate-800 hover:drop-shadow-2xl transition:shadow" {...storyblokEditable(blok)}>
                {blok?.name}
            </button>
        </Link>
    );
};

export default GradUndergradButton;