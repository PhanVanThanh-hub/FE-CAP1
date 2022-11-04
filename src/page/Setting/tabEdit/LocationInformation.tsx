import { Icon } from "@iconify/react";
import { Divider, Switch } from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";
import { makeStyles } from "@mui/styles";

import "animate.css";

interface Props {
  backMainTab: () => void;
}

const useStyles = makeStyles((theme: any) => ({
  switch_track: {
    backgroundColor: "rgba(145,199,136)",
  },
  switch_base: {
    color: "white",
    "&.Mui-disabled": {
      color: "#e886a9",
    },
    "&.Mui-checked": {
      color: "#52734D",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#91C788",
    },
  },
}));

const LocationInformation = ({ backMainTab }: Props) => {
  const classes = useStyles();

  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <Icon
          icon="bytesize:arrow-left"
          height="24"
          width="24"
          color="#52734D"
          cursor="pointer"
          onClick={backMainTab}
        />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Location Information
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />
      <Text sx={{ margin: "5px 0px", color: "rgba(0,0,0,0.6)" }}>
        If enabled, you'll be able to attach location information to your post.
      </Text>
      <Row
        sx={{
          marginTop: "10px",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Text>Add Location Information</Text>
        <Switch
          defaultChecked
          classes={{
            track: classes.switch_track,
            switchBase: classes.switch_base,
          }}
        />
      </Row>
    </Col>
  );
};

export default LocationInformation;
