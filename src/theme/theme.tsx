import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//import { useSelector } from "react-redux";

const ToggleColorMode = (p: any) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "5.625rem",
      },
      h2: {
        fontSize: "5rem",
      },
      h3: {
        fontSize: "3.9rem",
      },
      h4: {
        fontSize: "3rem",
      },
      h5: {
        fontSize: "2.5rem",
      },
      h6: {
        fontSize: "2.25rem",
      },
      subtitle1: {
        fontSize: "1.875rem",
      },
      subtitle2: {
        fontSize: "1.5625rem",
      },
      body1: {
        fontSize: "1.25rem",
      },
      body2: {
        fontSize: "1rem",
      },
      button: {
        fontSize: "1rem",
      },
      caption: {
        fontSize: "0.875rem",
      },
      overline: {
        fontSize: "0.75rem",
      },
    },
  });

  return <ThemeProvider theme={theme} {...p} />;
};

export default ToggleColorMode;
