import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// this might be incorrect if initial navigation isn't root of the app
const url = window.location.origin + window.location.pathname;

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const theme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="boiculese.auth0.com"
      clientId="9umXUJ235FysjsLWAvJKHE43jN7toi4P"
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
