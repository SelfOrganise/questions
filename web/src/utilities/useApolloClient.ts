import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export function useApolloClient() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    getAccessTokenSilently().then((token) => {
      const httpLink = createHttpLink({
        uri: process.env.REACT_APP_API_URL,
      });

      const authLink = setContext((_, { headers }) => {
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
    });
  }, [isAuthenticated, getAccessTokenSilently]);

  return client;
}
