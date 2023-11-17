import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { useState } from "react";

const HeaderMenuTab = ({ blok }) => {
    const defaultButtonStyle = "pl-2 text-base text-white font-robotoCondensed border-l-2";
    const hoverButtonStyle = "pl-2 text-lg text-slate-400 font-bold font-robotoCondensed";

    const [hovered, setHovered] = useState(false); // Hover state used to display dropdown menu
    const displayDropdown = () => {
        setHovered(true);
    };
    const hideDropdown = () => {
        setHovered(false);
    };

    return (
        <li className="w-fit mr-8 flex flex-col">
            <div>
                <Link href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
                    <button
                        onMouseEnter={displayDropdown}
                        onMouseLeave={hideDropdown}
                        className={hovered ? hoverButtonStyle : defaultButtonStyle}
                    >
                        {blok?.name}
                    </button>
                </Link>
                {hovered && (
                    <div
                        onMouseEnter={displayDropdown}
                        onMouseLeave={hideDropdown}
                        className="absolute flex flex-col w-fit"
                    >
                        <img
                            src={blok?.dropdown_icon?.filename}
                            className="ml-[13px] mt-[-3px] mb-[1px] h-[19px] w-[30px]"
                        />
                        <div className="ml-[-10px] px-[10px] pb-2 w-[200px] flex flex-col justify-center text-blue-950 text-lg font-robotoCondensed bg-white/[0.95] rounded drop-shadow-2xl">
                            <ul className="flex flex-col gap-0.5">
                                {blok?.dropdown_menu?.map((nestedBlok) => (
                                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </li>
    );
};

export default HeaderMenuTab;