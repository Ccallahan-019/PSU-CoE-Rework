import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const SideBarButton = ({ blok }) => {
    return (
        <Link href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
            <button className="px-3 xs:px-[28px] hover:px-[13.5px] xs:hover:px-[29.6px] hover:py-0.5 text-sm xs:text-base text-blue-900  border-2 border-solid border-blue-900 hover:border-none hover:text-white uppercase italic font-bold hover:bg-gradient-to-bl from-slate-600 via-slate-500 to-slate-800">
                {blok?.name}
            </button>
        </Link>
    );
};

export default SideBarButton;