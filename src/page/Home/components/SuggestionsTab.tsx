import React from "react";
import { Icon } from "@iconify/react";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { Col, Text } from "../../../components/elements";
import { COLOR } from "../../../constants";

const SuggestionsTab = () => {
  return (
    <Col
      sx={{
        width: "100%",
        maxWidth: 260,
        right: "0",
        position: "fixed",
        height: "100vh",
        color: "white",
        p: "0px 15Dpx",
        alignItems: "center",
      }}
    >
      <FormControl sx={{ width: "90%", marginTop: "20px" }} variant="outlined">
        <OutlinedInput
          sx={{
            borderRadius: "26px",
            height: "2.25em",
            fontSize: "1rem",
            backgroundColor: "button.hover",
            input: {
              "&::placeholder": {
                fontSize: "14px",
                paddingLeft: "0px",
              },
            },
          }}
          id="outlined-adornment-weight"
          startAdornment={
            <InputAdornment position="end">
              <Icon icon="flat-color-icons:search" color={COLOR.icon.primary} />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          placeholder="Search"
        />
      </FormControl>
      <Col
        sx={{
          height: "100%",
          width: "100%",
          marginTop: "20px",
          color: "black",
          p: "20px",
        }}
      >
        <Text fontSize="subtitle2">Suggestions for you</Text>
        <Text fontSize="body1" sx={{ marginTop: "10px" }}>
          #The Start-up Website
        </Text>
        <Text sx={{ marginTop: "10px" }}>
          Website for the startup community that aids.......
        </Text>
      </Col>
    </Col>
  );
};

export default SuggestionsTab;
