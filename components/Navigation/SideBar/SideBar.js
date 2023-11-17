import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState, useEffect, useRef } from "react";

const SideBar = ({ blok }) => {
    const hiddenStyle = "hidden";
    const shownStyle = "fixed top-0 right-0 h-full w-screen lg:w-[750px] flex flex-col bg-slate-100 overflow-y-auto";

    // State used to display or hide side navigation
    const [shown, setShown] = useState(false);
    const toggleSideNav = () => {
        if (shown) {
            setShown(false);
        } else {
            setShown(true);
        };
    };

    // Hide side navigation when user clicks outside
    const ref = useRef(null);
    useEffect(() => {
        const hideSideNavOutsideClick = (e) => {
            if (shown === true) {
                if (!ref.current?.contains(e.target)) {
                    setShown(false);
                };
            };
        };

        window.addEventListener("mouseup", hideSideNavOutsideClick);
        return () => {
            window.removeEventListener("mouseup", hideSideNavOutsideClick);
        };
    });

    return (
        <div className="flex" {...storyblokEditable(blok)}>
            <div className="flex items-center">
                <button
                    onClick={toggleSideNav}
                    className="ml-1 flex gap-2 items-center hover:opacity-60"
                >
                    <img
                        className="mt-[1px] w-[21px] h-[21px]"
                        src={blok?.search_icon?.filename}
                    />
                    <p className="hidden xl:block text-white text-lg uppercase font-robotoSlab">More</p>
                </button>
                <button
                    onClick={toggleSideNav}
                    className="flex items-center hover:opacity-60 xl:hidden"
                >
                    <img
                        className="w-[65px] h-[50px]"
                        src={blok?.icon?.filename}
                    />
                </button>
            </div>
            <div className={shown ? shownStyle : hiddenStyle} ref={ref}>
                <div className="w-full px-2 xs:px-10 pt-3 xs:py-5 flex flex-col gap-5 xs:gap-8">
                    <div className="flex">
                        <img
                            className="flex h-auto max-h-[35px] xs:max-h-[50px] lg:hidden"
                            src={blok?.side_logo?.filename}
                        />
                        <button
                            onClick={toggleSideNav}
                            className="w-full flex gap-1 items-center justify-end"
                        >
                            <img
                                className="mt-[1.5px] h-[13px] w-[13px]"
                                src={blok?.close_image?.filename}
                            />
                            <h1 className="uppercase text-sm xs:text-base align-top font-robotoSlab hover:font-semibold">Close</h1>
                        </button>
                    </div>
                    <div className="w-full pl-2 flex flex-col gap-5 xs:gap-8 justify-center items-center">
                        <ul className="h-10 flex gap-2 xs:gap-3 items-center justify-end">
                            {blok?.side_buttons?.map((nestedBlok) => (
                                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                            ))}
                        </ul>
                        {blok?.search_bar?.map((nestedBlok) => (
                            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        ))}
                    </div>
                </div>
                <div className="w-full xs:pt-5 flex flex-col sm:grid sm:grid-cols-2 gap-1 xs:gap-4 sm:gap-8 items-center sm:items-start sm:justify-items-center">
                    <ul className="pt-4 pb-3 xs:py-5 sm:pt-10 flex flex-col gap-2 xs:gap-4">
                        {blok?.side_menu?.map((nestedBlok) => (
                            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        ))}
                    </ul>
                    <div className="w-[80vw] sm:w-[45vw] lg:w-[325px] flex flex-col xs:gap-1 uppercase">
                        <h1 className="text-base xs:text-lg text-blue-900">
                            {blok?.links_header}
                        </h1>
                        <ul className="w-[85%] xs:w-[90%]">
                            {blok?.quick_links?.map((nestedBlok) => (
                                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                            ))}
                        </ul>
                        <div className="pb-4 w-full h-[70px] xs:h-[140px] flex items-end justify-end">
                            {blok?.social_media?.map((nestedBlok) => (
                                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SideBar;