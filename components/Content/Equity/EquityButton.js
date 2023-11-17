import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const EquityButton = ({ blok }) => {
    return (
        <Link href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
            <button className="px-[44px] py-[8px] hover:px-[46px] hover:py-[10px] border-2 border-blue-900 hover:border-none text-lg text-blue-900 hover:text-white uppercase italic font-bold bg-white hover:bg-gradient-to-bl from-slate-600 via-slate-500 to-slate-800 hover:shadow-2xl">
                {blok?.name}
            </button>
        </Link>
    );
};

export default EquityButton;