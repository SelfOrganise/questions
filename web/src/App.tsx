import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { AuthenticatedApolloProvider } from "./components/AuthenticatedApolloProvider";
import { Centered } from "./components/Centered";
import { ManageQuestionsPage } from "./pages/ManageQuestionsPage";
import { PlayPage } from "./pages/PlayPage";

// this might be incorrect if initial navigation isn't root of the app
export const url = window.location.origin + window.location.pathname;

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <AppBar />
      <Container maxWidth="md" className="App">
        {isAuthenticated && (
          <AuthenticatedApolloProvider>
            <Switch>
              <Route path="/play">
                <PlayPage />
              </Route>
              <Route path="/">
                <ManageQuestionsPage />
              </Route>
            </Switch>
          </AuthenticatedApolloProvider>
        )}
        {isLoading && (
          <Centered>
            <CircularProgress />
          </Centered>
        )}
        {!isAuthenticated && !isLoading && (
          <Centered>
            <Typography variant="h5">Please login</Typography>
          </Centered>
        )}
      </Container>
    </>
  );
}

export default App;
