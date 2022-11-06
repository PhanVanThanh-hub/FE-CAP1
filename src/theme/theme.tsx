import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteType } from "@material-ui/core";

//import { useSelector } from "react-redux";

const ToggleColorMode = (p: any) => {
  const mode = "light";
  const theme = createTheme({
    typography: {
      allVariants: {
        color: "#BBE1FA",
      },
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
        fontSize: "1.45rem",
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
    palette: {
      mode,
      ...(mode === "light"
        ? {
            text: {
              primary: "#BBE1FA",
              disabled: "rgba(187, 225, 250, 0.5)",
            },
            button: {
              primary: "#3282B8",
              hover: "#0F4C75",
            },
            background: {
              default: "#1B262C",
              paper: "rgba(187, 225, 250, 0.2)",
            },
            icon: {
              primary: "#BBE1FA",
            },
            divider: "#3282B8",
            success: { main: "rgb(46, 125, 50)" },
          }
        : {}),
    },
  });

  return <ThemeProvider theme={theme} {...p} />;
};

export default ToggleColorMode;
