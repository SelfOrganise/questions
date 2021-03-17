import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Auth0Context, useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export function useApolloClient() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [token, setToken] = useState<string>();
  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    getAccessTokenSilently().then((token) => {
      setToken(token);
    });
  }, [isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    const httpLink = createHttpLink({
      uri: process.env.REACT_APP_API_URL,
    });

    const authLink = setContext((_, { headers }) => {
      const ctx = Auth0Context;
      console.log({ ctx, what: _ });
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      };
    });

    setClient(
      new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
      })
    );
  }, [token]);

  return client;
}
