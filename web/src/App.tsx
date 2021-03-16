import { useAuth0 } from "@auth0/auth0-react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { AddQuestion } from "./components/AddQuestion";
import { Centered } from "./components/Centered";
import { Questions } from "./components/Questions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// this might be incorrect if initial navigation isn't root of the app
const url = window.location.origin + window.location.pathname;

function App() {
  const classes = useStyles();
  const {
    logout,
    loginWithRedirect,
    isAuthenticated,
    user,
    isLoading,
  } = useAuth0();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Questions
          </Typography>
          {isAuthenticated ? (
            <>
              <Typography variant="body1">Hello {user.email}</Typography>
              <Button color="inherit" onClick={() => logout({ returnTo: url })}>
                Logout
              </Button>
            </>
          ) : (
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className="App">
        {isAuthenticated && (
          <Box padding={5}>
            <AddQuestion />
            <Questions />
          </Box>
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
