import { ApolloProvider } from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import { useApolloClient } from "../utilities/useApolloClient";
import { Centered } from "./Centered";

export function AuthenticatedApolloProvider(
  props: React.PropsWithChildren<unknown>
) {
  const client = useApolloClient();
  if (!client) {
    return (
      <Centered>
        <CircularProgress />
      </Centered>
    );
  }

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
