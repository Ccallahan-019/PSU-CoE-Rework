import { storyblokEditable } from "@storyblok/react";

const SearchBar = ({ blok }) => {
    return (
        <div className="flex justify-end items-center" {...storyblokEditable(blok)}>
            <input
                className="w-[95vw] xs:w-[440px] md:w-[500px] px-2 py-1 xs:py-2 placeholder:text-slate-500 placeholder:text-sm xs:placeholder:text-lg placeholder:font-semibold border-blue-950 border-[1px] rounded hover:caret-black"
                type="text"
                placeholder={`${blok?.place_holder}`}
            />
            <button className="absolute px-2 py-2 flex justify-end items-center">
                <img
                    src={blok?.search_icon.filename}
                />
            </button>
        </div>
    );
};

export default SearchBar;