import { storyblokEditable } from "@storyblok/react";

const HeaderButton = ({ blok }) => {
    return (
        <a href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
            <button className="px-[28px] hover:px-[30px] hover:py-0.5 border-2 border-solid border-sky-200 hover:border-none text-base text-sky-200 hover:text-white uppercase italic font-bold hover:bg-gradient-to-bl from-slate-600 via-slate-500 to-slate-800 hover:shadow-2xl">
                {blok?.name}
            </button>
        </a>
    );
};

export default HeaderButton;