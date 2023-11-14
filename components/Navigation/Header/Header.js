import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header({ blok }) {
    const bgTransparent = "absolute w-full bg-transparent";
    const bgBackground = "absolute w-full bg-gradient-to-r from-[#001E44] from-30% via-[#1B3C76] via-[85%] to-[#000321] to-100%";
    const [isScrolled, setIsScrolled] = useState(window.scrollY > 120 ? true : false); // Set scroll state based on how far window has been scrolled

    useEffect(() => {
        function onScroll() {
            if (window.scrollY > 120) {
                setIsScrolled(true); // If the user scrolls past 120px vertically, set state to true
            } else {
                setIsScrolled(false); // If not, set state to false
            };
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    });

    return (
        <header>
            <div id="header-container" className="fixed z-10 w-full" {...storyblokEditable(blok)}>
                <nav className={isScrolled ? bgBackground : bgTransparent}>
                    <div id="nav-container" className="mx-4 sm:mx-10 md:mx-16 mt-3 mb-2">
                        <div className="relative flex">
                            <div className="w-fit mr-6 flex items-center">
                                <Link href={blok?.link.cached_url}>
                                    <img
                                        className="w-[215px]"
                                        src={blok?.header_logo.filename}
                                    />
                                </Link>
                            </div>
                            <div className="flex gap-3 items-center justify-end w-full">
                                <ul className="hidden xl:flex items-center">
                                    {blok?.header_menu.map((nestedBlok) => (
                                        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                                    ))}
                                </ul>
                                <div className="hidden lg:flex">
                                    <ul className="w-96 flex items-center justify-end gap-3">
                                        {blok?.header_buttons?.map((nestedBlok) => (
                                            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                                        ))}
                                    </ul>
                                </div>
                                {blok?.side_bar.map((nestedBlok) => (
                                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
  };