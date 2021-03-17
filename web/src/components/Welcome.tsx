import { useAuth0 } from "@auth0/auth0-react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

export function Welcome() {
  const auth = useAuth0();
  return (
    <Box marginBottom="10px">
      <Typography variant="h6">Welcome {auth.user.name} 👋</Typography>
    </Box>
  );
}
