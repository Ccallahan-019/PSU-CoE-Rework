"use client";
import { ApolloLink, HttpLink, concat } from "@apollo/client";
import {
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    NextSSRApolloClient,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
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

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        token: "SQznUSPpSvQA2xuEfFBgIQtt",
        version: "draft",
      },
    }));
    return forward(operation);
  });

function makeClient() {
    const httpLink = new HttpLink({
        uri: "https://gapi-us.storyblok.com/v1/api",
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
        typeof window === "undefined"
            ? ApolloLink.from([
                new SSRMultipartLink({
                stripDefer: true,
                }),
                concat(authMiddleware, httpLink),
            ])
            : concat(authMiddleware, httpLink),
    });
};

const components = {
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
    in_progress_content: InProgressContent
};
  
storyblokInit({
  accessToken: "OSnGgxkX9vEC3o6ypDL2Ugtt",
  components,
});

export function ApolloWrapper(props) {
    const { children } = props;
        return (
            <ApolloNextAppProvider makeClient={makeClient}>
                {children}
            </ApolloNextAppProvider>
        );
};
