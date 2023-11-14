import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const QuickLink = ({ blok }) => {
    return (
        <li className="pt-2 pb-0.5 text-xs xs:text-sm font-semibold hover:font-bold border-b-2 border-dotted border-slate-400" {...storyblokEditable(blok)}>
            <Link href={blok?.link.cached_url}>
                {blok?.name}
            </Link>
        </li>
    );
};

export default QuickLink;