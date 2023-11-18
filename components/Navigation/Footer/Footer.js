import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import useMediaQuery from "@/components/Custom Hooks/MediaQueryHook";

const Footer = ({ blok }) => {
    const isMedium = useMediaQuery("(max-width:767.5px)")

    return (
        <div
            className="py-5 flex flex-col gap-4 items-center justify-center text-slate-300 text-sm tracking-wide font-robotoCondensed bg-gradient-to-bl from-[#001E44] from-[40%] via-[#1B3C76] via-[80%] to-[#000321] to-100% 
                       md:px-2 md:gap-5" 
            {...storyblokEditable(blok)}
        >
            <div className="flex text-center">
                <div className="grid auto-cols-auto gap-0.5 items-center text-white justify-items-center 
                                md:flex md:gap-3">
                    {blok?.top_tabs?.map((nestedBlok) => (
                        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                    ))}
                </div>
                <div className={isMedium ? "hidden" : "relative z-[1] right-[2px] w-[5px] border-l-[4px] border-[#001E44]"}></div>
            </div>
            <div className="flex flex-col gap-4 items-center
                            md:flex-row md:gap-8">
                <img
                    className="h-12 w-12"
                    src={blok?.logo?.filename}
                />
                <div className="flex flex-col gap-4 items-center
                                md:gap-2 md:items-start">
                    <div className="flex flex-row justify-center 
                                    md:flex-col md:gap-1">
                        <div className="w-1/2 flex justify-center
                                        md:w-full md:justify-start">
                            <div className="flex flex-col 
                                            md:flex-row md:gap-3">
                                {blok?.bottom_tabs?.map((nestedBlok) => (
                                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                                ))}
                            </div>
                            <div className={isMedium ? "hidden" : "relative z-[1] right-[2px] w-[5px] border-l-[4px] border-[#001E44]"}></div>
                        </div>
                        <div className="px-4 w-1/2 flex flex-col gap-1.5 border-dashed border-slate-500
                                        sm:px-0
                                        md:pb-1 md:w-full md:flex-row md:gap-3 md:border-b-[1px]">
                            <p>
                                {blok?.address}
                            </p>
                            <p className="w-auto text-white font-semibold border-slate-500 
                                        md:px-3 md:border-x-[1px]">
                                {blok?.phone_number}
                            </p>
                            <Link href="#" className="text-white font-semibold">
                                {blok?.contact}
                            </Link>
                        </div>
                    </div>
                    <div className="pt-2 col-span-2 justify-self-center border-t-[1px] border-slate-500 border-dashed 
                                    md:pt-0 md:w-fit md:border-0">
                        <img
                            className="h-[10px]"
                            src={blok?.we_are_image?.filename}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;