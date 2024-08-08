import { storyblokEditable } from "@storyblok/react";

const HeaderButton = ({ blok }) => {
    const event = ({ action, category, label, value }) => {
        (window).gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      };

      const addToCart = () => {
        event({
          action: 'add_to_cart',
          category: 'ecommerce',
          label: 'Item added to cart',
          value: 'Tesla',
        });
      };

    return (
        <a href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
            <button onClick={addToCart} className="px-7 hover:px-[29.5px] hover:py-0.5 border-2 border-solid border-sky-200 hover:border-none text-base text-sky-200 hover:text-white uppercase italic font-bold hover:bg-gradient-to-bl from-slate-600 via-slate-500 to-slate-800 hover:shadow-2xl">
                {blok?.name}
            </button>
        </a>
    );
};

export default HeaderButton;