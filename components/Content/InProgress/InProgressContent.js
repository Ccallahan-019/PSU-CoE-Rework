import { storyblokEditable } from "@storyblok/react";

const InProgressContent = ({ blok }) => {
    return (
        <div
            className="h-screen flex flex-col gap-8 items-center justify-center text-center text-white font-robotoSlab bg-gradient-to-br from-[#001E44] from-30% via-[#1B3C76] via-[70%] to-[#000321] to-100%" 
            {...storyblokEditable(blok)}
        >
            <img
                className="h-[200px] sm:h-[280px]"
                src={blok?.image.filename}
            />
            <h1 className="px-4 text-4xl sm:text-6xl">
                {blok?.header}
            </h1>
            <p className="px-5 sm:px-14 md:px-28 lg:px-44 text-lg sm:text-xl">
                {blok?.description}
            </p>
        </div>
    )
}

export default InProgressContent;