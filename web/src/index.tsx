import { Auth0Provider } from "@auth0/auth0-react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";

export const url = window.location.origin + process.env.REACT_APP_BASENAME;

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#f48fb1",
      light: "#ffc1e3",
      dark: "#bf5f82",
    },
    primary: {
      main: "#ab47bc",
      light: "#df78ef",
      dark: "#790e8b",
    },
  },
});

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
        <HashRouter basename={process.env.REACT_APP_BASENAME}>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
