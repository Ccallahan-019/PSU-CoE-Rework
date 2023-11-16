import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Footer = ({ blok }) => {
    return (
        <div
            className="px-3 lg:px-0 py-4 md:py-6 flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-16 items-center justify-center text-white text-sm font-robotoCondensed bg-gradient-to-br from-[#001E44] from-30% via-[#1B3C76] via-[70%] to-[#000321] to-100%" 
            {...storyblokEditable(blok)}
        >
            <div>
                <img
                    className="h-10 md:h-12"
                    src={blok?.logo.filename}
                />
            </div>
            <div className="flex flex-col gap-5 sm:gap-3 items-center">
                <div className="pb-2 flex flex-col lg:flex-row gap-5 lg:border-b-[1px] border-slate-500 border-dashed">
                    <p>
                        {blok?.address}
                    </p>
                    <p className="w-full lg:w-auto py-4 lg:py-0 lg:px-5 border-y-[1px] lg:border-y-0 lg:border-x-[1px] border-slate-500">
                        {blok?.phone_number}
                    </p>
                    <p>
                        {blok?.contact}
                    </p>
                </div>
                <img
                    className="h-[10px]"
                    src={blok?.we_are_image.filename}
                />
            </div>
        </div>
    );
};

export default Footer;