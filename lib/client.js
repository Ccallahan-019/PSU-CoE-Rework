import { HttpLink, ApolloLink, concat } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const httpLink = new HttpLink({ uri: "https://gapi-us.storyblok.com/v1/api" });

const authMiddleware = new ApolloLink((operation, forward) => { //Use Apollo link to set Storyblok space token
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        token: "UGyUX1GKmdytBQ5DzmoQCAtt",
        version: "published",
      },
    }));
    return forward(operation);
  });

export const { getClient } = registerApolloClient(() => { //Create client using 'authMiddleware' Link and Storyblok GraphQL API Endpoint
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: concat(authMiddleware, httpLink),
    })
});

