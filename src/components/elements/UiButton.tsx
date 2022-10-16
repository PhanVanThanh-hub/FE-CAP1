import React from "react";
import { Button } from "@mui/material";

export const UiButton = (p: any) => {
  return (
    <Button
      style={{
        textTransform: "capitalize",
        fontSize: "0.9375rem",
        fontWeight: "bold",

        color: "white",
      }}
      {...p}
    />
  );
};

export const ButtonDefault = (p: any) => {
  return (
    <UiButton
      sx={{
        padding: "7px 40px",
        backgroundColor: "#FA541C",
        borderRadius: "24px",
        color: "white",

        "&:hover": {
          backgroundColor: "rgba(157, 31, 14, 1)",
        },
      }}
      {...p}
    />
  );
};
