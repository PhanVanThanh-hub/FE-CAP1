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

const EmailNotifications = ({ backMainTab }: Props) => {
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
          Push notifications
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />
      <Row
        sx={{
          margin: "10px 0px",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Col sx={{ width: "80%" }}>
          <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
            Push notifications
          </Text>
          <Text sx={{ marginTop: "10px" }}>
            Receive push notifications to stay informed even when you are not on
            CSW. This function is always turnable off.
          </Text>
        </Col>
        <Switch
          defaultChecked
          classes={{
            track: classes.switch_track,
            switchBase: classes.switch_base,
          }}
        />
      </Row>
      <Row sx={{ alignItems: "center", justifyContent: "center" }}>
        <Divider sx={{ width: "80%", margin: "20px 0px" }} />
      </Row>
      <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
        In regards to you
      </Text>
      <Row
        sx={{
          margin: "10px 0px",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Text>New notification</Text>
        <Switch
          defaultChecked
          classes={{
            track: classes.switch_track,
            switchBase: classes.switch_base,
          }}
        />
      </Row>
      <Row
        sx={{
          margin: "10px 0px",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Text>Direct messages</Text>
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

export default EmailNotifications;
