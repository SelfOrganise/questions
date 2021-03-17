import { Auth0Provider } from "@auth0/auth0-react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";

// this might be incorrect if initial navigation isn't root of the app
const url = window.location.origin + window.location.pathname;

const theme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="boiculese.auth0.com"
      clientId="9umXUJ235FysjsLWAvJKHE43jN7toi4P"
      audience="https://bogdbo-questions-api.herokuapp.com"
      scope="start:questions"
      redirectUri={url}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
