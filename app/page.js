import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import StoryblokStory from "@storyblok/react/story";

export const revalidate = 3600;

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

  const client = getClient(); //Initialize Apollo Client
  const { loading, error, data } = await client.query({query: PAGE_QUERY, variables: {id: slug}}); //Request data from Storyblok using page query and 'slug' variable

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-QQL6PBRF35"></script>
      <script>
        {window.dataLayer = window.dataLayer || []}
        {function gtag(){dataLayer.push(arguments)}}
        {gtag('js', new Date())}
        {gtag('config', 'G-QQL6PBRF35')}
      </script>
      <StoryblokStory story={data?.PageItem} />
    </div>
  );
};