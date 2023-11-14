import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import StoryblokStory from "@storyblok/react/story";

export const revalidate = 5;

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
    const client = getClient();
    const { loading, error, data } = await client.query({ query: SLUG_QUERY });

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return data?.PageItems.items.map((page) => ({
        slug: page.full_slug.split("/"),
    }));
};

export default async function Page({ params }) {
    const slug = params.slug ? params.slug.join("/") : "home";

    if (slug === "home") {
        return
    }
    
    const client = getClient();
    const { loading, error, data } = await client.query({query: PAGE_QUERY, variables: {id: slug}});

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <StoryblokStory story={data?.PageItem} />
    );
};