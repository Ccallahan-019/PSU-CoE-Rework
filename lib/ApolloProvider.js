"use client"; //Mark as Client Component
import { ApolloLink, HttpLink, concat } from "@apollo/client";
import { ApolloNextAppProvider, NextSSRInMemoryCache, NextSSRApolloClient, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";
import { storyblokInit } from "@storyblok/react";
import Header from "@/components/Navigation/Header/Header";
import Page from "@/components/Page";
import HeaderMenuTab from "@/components/Navigation/Header/HeaderMenuTab";
import HeaderDropdownOption from "@/components/Navigation/Header/HeaderDropdownOption";
import HeaderButton from "@/components/Navigation/Header/HeaderButton";
import HotlineButton from "@/components/Navigation/HotlineButton";
import SideBar from "@/components/Navigation/SideBar/SideBar";
import SideBarButton from "@/components/Navigation/SideBar/SideBarButton";
import SearchBar from "@/components/Navigation/SideBar/SearchBar";
import SideBarTab from "@/components/Navigation/SideBar/SideBarTab";
import SideDropdownOption from "@/components/Navigation/SideBar/SideDropdownOption";
import HeroBanner from "@/components/Content/HeroBanner/HeroBanner";
import ScrollButton from "@/components/Content/HeroBanner/ScrollButton";
import FactSheet from "@/components/Content/FactSheet/FactSheet";
import Fact from "@/components/Content/FactSheet/Fact";
import GradUndergradTemplate from "@/components/Content/GradUndergrad/GradUndergradTemplate";
import UndergradContent from "@/components/Content/GradUndergrad/UndergradContent";
import GradContent from "@/components/Content/GradUndergrad/GradContent";
import GradUndergradButton from "@/components/Content/GradUndergrad/GradUndergradButton";
import IEngineerHeader from "@/components/Content/iEngineer/IEngineerHeader";
import IEngineerSpotlight from "@/components/Content/iEngineer/IEngineerSpotlight";
import IEngineerButton from "@/components/Content/iEngineer/IEngineerButton";
import IEngineer from "@/components/Content/iEngineer/IEngineerContainer";
import EquityContent from "@/components/Content/Equity/EquityContent";
import EquityButton from "@/components/Content/Equity/EquityButton";
import NewsPosts from "@/components/Content/NewsPosts/NewsPosts";
import NewsPost from "@/components/Content/NewsPosts/NewsPost";
import SocialMedia from "@/components/Navigation/SideBar/SocialMedia";
import SocialMediaLink from "@/components/Navigation/SideBar/SocialMediaLink";
import QuickLink from "@/components/Navigation/SideBar/QuickLink";
import InProgressContent from "@/components/Content/InProgress/InProgressContent";
import Footer from "@/components/Navigation/Footer/Footer";
import FooterTab from "@/components/Navigation/Footer/FooterTab";

const authMiddleware = new ApolloLink((operation, forward) => { //Use Apollo link to set Storyblok space token
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        token: "RiYQrfZdGdt1l9GOfAq8lwtt",
        version: "published",
      },
    }));
    return forward(operation);
  });

function makeClient() { //Create client using 'authMiddleware' Link and Storyblok GraphQL API Endpoint
    const httpLink = new HttpLink({
        uri: "https://gapi-us.storyblok.com/v1/api",
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
        typeof window === "undefined" //If executed on server
            ? ApolloLink.from([new SSRMultipartLink({
                stripDefer: true, // Strip fragments marked with @defer directive
                }),
                concat(authMiddleware, httpLink),
            ])
            : concat(authMiddleware, httpLink),
    });
};

const components = { //Link Storyblok bloks with corresponding components
    page: Page,
    header: Header,
    header_menu_tab: HeaderMenuTab,
    header_dropdown_option: HeaderDropdownOption,
    header_button: HeaderButton,
    side_bar: SideBar,
    side_bar_button: SideBarButton,
    search_bar: SearchBar,
    side_bar_tab: SideBarTab,
    side_dropdown_option: SideDropdownOption,
    hero_banner: HeroBanner,
    scroll_button: ScrollButton,
    grad_undergrad_template: GradUndergradTemplate,
    undergrad_content: UndergradContent,
    grad_content: GradContent,
    factsheet: FactSheet,
    fact: Fact,
    grad_undergrad_button: GradUndergradButton,
    i_engineer_header: IEngineerHeader,
    i_engineer_spotlight: IEngineerSpotlight,
    i_engineer_button: IEngineerButton,
    i_engineer: IEngineer,
    hotline_button: HotlineButton,
    equity_content: EquityContent,
    equity_button: EquityButton,
    news_posts: NewsPosts,
    news_post: NewsPost,
    social_media: SocialMedia,
    social_media_link: SocialMediaLink,
    quick_link: QuickLink,
    in_progress_content: InProgressContent,
    footer: Footer,
    footer_tab: FooterTab,
};
  
storyblokInit({ //Initialize connection to Storyblok
  accessToken: "RiYQrfZdGdt1l9GOfAq8lwtt",
  components,
});

export function ApolloWrapper(props) { //Wrapper used for Client Components
    const { children } = props;
        return (
            <ApolloNextAppProvider makeClient={makeClient}>
                {children}
            </ApolloNextAppProvider>
        );
};
