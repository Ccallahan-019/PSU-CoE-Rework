import { HttpLink, ApolloLink, concat } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const httpLink = new HttpLink({ uri: "https://gapi-us.storyblok.com/v1/api" });

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

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: concat(authMiddleware, httpLink),
    })
});

