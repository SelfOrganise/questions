import Box from "@material-ui/core/Box";
import { BoxProps } from "@material-ui/core/Box/Box";
import React from "react";

export function Centered({
  children,
  ...boxProps
}: React.PropsWithChildren<BoxProps>) {
  return (
    <Box
      marginTop="10%"
      display="flex"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      justifyItems="center"
      {...boxProps}
    >
      {children}
    </Box>
  );
}
