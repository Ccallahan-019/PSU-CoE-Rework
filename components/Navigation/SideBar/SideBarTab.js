import { storyblokEditable, StoryblokComponent } from "@storyblok/react"
import { useState} from "react";

const SideBarTab = ({ blok }) => {
    const downArrow = blok?.dropdown_hidden_image.filename;
    const upArrow = blok?.dropdown_shown_image.filename;

    // When user clicks on each tab, show or hide dropdown menu (depending on current state)
    const [shown, setShown] = useState(false);
    const toggleDropdown = () => {
        if (shown) {
            setShown(false);
        } else {
            setShown(true);
        };
    };

    

    return (
        <li className="w-full flex flex-col items-center" {...storyblokEditable(blok)}>
            <div className="w-[80vw] sm:w-[40vw] lg:w-[280px] flex flex-col">
                <button
                    onClick= {toggleDropdown}
                    className="w-full flex items-center text-lg xs:text-xl hover:italic font-roboto"
                >
                    {blok?.name}
                    <div className="w-full flex justify-end">
                        <img
                            className="h-[20px] w-[20px]"
                            src={shown ? upArrow : downArrow}
                        />
                    </div>
                </button>
                <div className={shown ? "flex flex-col font-robotoCondensed drop-shadow-2xl" : "hidden"}>
                    <ul className="flex flex-col px-3 pb-2 xs:pb-4">
                        {blok?.dropdown_menu.map((nestedBlok) => (
                            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default SideBarTab;