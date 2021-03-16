import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AddQuestion } from './components/AddQuestion';
import { Question } from './components/Question';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Questions } from './components/Questions';

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

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const theme = createMuiTheme();

function AuthenticatedApp() {
  return (
    <Auth0Provider
      domain="boiculese.auth0.com"
      clientId="9umXUJ235FysjsLWAvJKHE43jN7toi4P"
      redirectUri={window.location.origin}
    >
      <ApolloProvider client={apolloClient}>
        <App/>
      </ApolloProvider>
    </Auth0Provider>
  );
}


function App() {
  const classes = useStyles();
  const { logout, loginWithRedirect, isAuthenticated, user } = useAuth0();
  console.log({ isAuthenticated });
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Questions
          </Typography>
          {isAuthenticated
            ? <Button color="inherit" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
            : <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>}
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" className="App">
        <Box padding={5}>
          <Question/>
          {isAuthenticated ? user.email : 'unauthenticated'}
          <AddQuestion/>
          <Questions/>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AuthenticatedApp;