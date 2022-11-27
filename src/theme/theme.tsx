import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//import { useSelector } from "react-redux";

const ToggleColorMode = (p: any) => {
  const mode = "light";
  const theme = createTheme({
    typography: {
      allVariants: {
        color: "rgb(213, 217, 233)",
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
        fontSize: "0.45rem",
      },
    },
    palette: {
      mode,
      ...(mode === "light"
        ? {
            text: {
              primary: "rgb(255, 255, 255)",
              disabled: "rgba(187, 225, 250, 0.5)",
            },
            button: {
              primary: "rgb(236, 64, 122)",
              hover: "#0F4C75",
            },
            background: {
              default: "rgb(10, 15, 35)",
              paper: "rgb(18, 23, 47)",
            },

            divider: "rgb(213, 217, 233)",
            success: { main: "rgb(46, 125, 50)" },
            action: {
              active: "rgb(236, 64, 122)",
              hover: "rgba(213, 217, 233, 0.082)",
            },
          }
        : {}),
    },
  });

  return <ThemeProvider theme={theme} {...p} />;
};

export default ToggleColorMode;
