import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const HeaderDropdownOption = ({ blok }) => {
    return (
        <li className="px-2 pt-1 text-xl hover:font-semibold border-b-2 border-dotted border-slate-400" {...storyblokEditable(blok)}>
            <Link href={blok?.link?.cached_url}>
                {blok?.name}
            </Link>
        </li>
    );
};

export default HeaderDropdownOption;