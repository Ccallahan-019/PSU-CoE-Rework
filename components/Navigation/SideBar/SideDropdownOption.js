import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const SideDropdownOption = ({ blok }) => {
    return (
        <li className="pt-2 text-base xs:text-lg hover:font-bold border-b-2 border-dotted border-slate-400" {...storyblokEditable(blok)}>
            <Link href={blok?.link.cached_url}>
                {blok?.name}
            </Link>
        </li>
    );
};

export default SideDropdownOption;