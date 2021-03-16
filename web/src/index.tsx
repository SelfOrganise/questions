import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Auth0Context, Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// this might be incorrect if initial navigation isn't root of the app
const url = window.location.origin + window.location.pathname;

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const theme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="boiculese.auth0.com"
      clientId="9umXUJ235FysjsLWAvJKHE43jN7toi4P"
      audience="https://bogdbo-questions-api.herokuapp.com"
      redirectUri={url}
    >
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
