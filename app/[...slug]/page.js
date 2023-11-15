import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import StoryblokStory from "@storyblok/react/story";

export const revalidate = 3600;

const SLUG_QUERY = gql`
    query {
        PageItems {
            items {
                full_slug
            }
        }
    }
`;

const PAGE_QUERY = gql`
    query RequestedPage($id: ID!) {
        PageItem(id: $id) {
            id
            slug
            content {
                 _uid
                component
                body
            }
        }
    }
`;

export const dynamicParams = false;

export async function generateStaticParams() {
    const client = getClient(); //Initialize Apollo Client
    const { loading, error, data } = await client.query({ query: SLUG_QUERY }); //Request page slugs from Storyblok using slug query

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return data?.PageItems.items.map((page) => ({ //Return slugs to be used as params
        slug: page.full_slug.split("/"),
    }));
};

export default async function Page({ params }) {
    const slug = params.slug ? params.slug.join("/") : "home"; //If page slug is passed in by params, set as 'slug' variable value; if not, default's to "home" slug
    
    const client = getClient(); //Initialize Apollo Client
    const { loading, error, data } = await client.query({query: PAGE_QUERY, variables: {id: slug}}); //Request data from Storyblok using page query and 'slug' variable

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <StoryblokStory story={data?.PageItem} /> //Render page content
    );
};
