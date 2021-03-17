import { useAuth0 } from "@auth0/auth0-react";
import MaterialAppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router-dom";
import { url } from '../index';

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginLeft: "20px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
    },
  },
}));

export function AppBar() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
  const [currentTab, setCurrentTab] = React.useState("/");
  const history = useHistory();

  const classes = useStyles();

  const handleTabChange = (_: unknown, newTab: string) => {
    setCurrentTab(newTab);
    history.push(newTab);
  };

  return (
    <MaterialAppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Box display={{ xs: "none", sm: "block" }}>
            <Typography variant="h6">⁉️ Questions ⁉️</Typography>
          </Box>
          {isAuthenticated && (
            <Tabs
              className={classes.tabs}
              value={currentTab}
              onChange={handleTabChange}
            >
              <Tab label="⚙️ Manage" value="/" />
              <Tab label="🕹️ Play" value="/play" />
            </Tabs>
          )}
        </Box>
        {isAuthenticated ? (
          <Button color="inherit" onClick={() => logout({ returnTo: url })}>
            Logout
          </Button>
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
    </MaterialAppBar>
  );
}
