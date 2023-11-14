import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const HeroBanner = ({ blok }) => {
    return (
        <div className='relative w-full h-screen' {...storyblokEditable(blok)}>
            <div className="absolute z-0 w-full h-full flex justify-center items-end object-cover bg-black">
                <video autoPlay muted loop className="absolute z-10 w-full h-full object-cover opacity-70">
                    <source src={blok?.background_video.filename} />
                </video>
                
            </div>
            <div className="relative h-full flex flex-col justify-end text-4xl xs:text-7xl text-white font-robotoSlab">
                <h1 className="pl-2 xs:pl-4 sm:pl-14">{blok.banner_first_line}<br/>{blok.banner_second_line}</h1>
                {blok?.scroll_button.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
            </div>
        </div>
    );
};

export default HeroBanner;