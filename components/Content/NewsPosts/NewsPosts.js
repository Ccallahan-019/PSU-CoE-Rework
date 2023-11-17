import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const NewsPosts = ({ blok }) => {
    return (
        <div className="px-2 xs:px-4 py-4 md:px-7 lg:py-10 xl:px-14 xl:pt-14 xl:pb-20 flex flex-col gap-3 xs:gap-5 lg:gap-8 xl:gap-10 font-bold bg-white" {...storyblokEditable(blok)}>
            <div className="flex gap-3 items-center">
                <h1 className="text-xl xs:text-2xl uppercase font-robotoSlab">
                    {blok?.header}
                </h1>
                <img
                    className="mt-[1px] p-[3px] h-[19px] w-[19px] bg-blue-900 rounded"
                    src={blok?.rss_icon.filename}
                />
            </div>
            <div className="xl:px-4 flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-4 xs:gap-5 md:gap-7 items-center lg:justify-around justify-items-center font-robotoSlab">
                {blok?.posts.map((nestedblok) => (
                    <StoryblokComponent blok={nestedblok} key={nestedblok._uid} />
                ))}
            </div>
        </div>
    );
};

export default NewsPosts;