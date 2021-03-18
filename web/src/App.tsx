import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, CircularProgress } from "@material-ui/core";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { AuthenticatedApolloProvider } from "./components/AuthenticatedApolloProvider";
import { Centered } from "./components/Centered";
import { ManageQuestionsPage } from "./pages/ManageQuestionsPage";
import { PlayPage } from "./pages/PlayPage";

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  return (
    <>
      <AppBar />
      <Container maxWidth="md" className="App">
        {isAuthenticated && (
          <AuthenticatedApolloProvider>
            <Switch>
              <Route exact={true} path="/play">
                <PlayPage />
              </Route>
              <Route exact={true} path="/">
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
            <Button variant="outlined" onClick={loginWithRedirect}>Click here to login</Button>
          </Centered>
        )}
      </Container>
    </>
  );
}

export default App;
