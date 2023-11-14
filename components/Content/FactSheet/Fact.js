import { storyblokEditable } from "@storyblok/react";

const Fact = ({ blok }) => {
    return (
        <div className="relative pl-4 flex flex-col justify-center text-white font-bold font-robotoSlab border-s-2 border-sky-400" {...storyblokEditable(blok)}>
            <h1 className="max-w-fit pb-1 text-4xl xs:text-5xl border-b-2 border-white">
                {blok?.header}
            </h1>
            <p className="pt-1 text-base xs:text-lg">
                {blok?.detail}
            </p>
        </div>
    );
};

export default Fact;