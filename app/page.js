import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import StoryblokStory from "@storyblok/react/story";

export const revalidate = 5;

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

export default async function Home() {
  const slug = "home";
  
  const client = getClient();
  const { loading, error, data } = await client.query({query: PAGE_QUERY, variables: {id: slug}});

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <StoryblokStory story={data?.PageItem} />
  );
};