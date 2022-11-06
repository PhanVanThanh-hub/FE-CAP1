import React from "react";
import { Divider } from "@mui/material";
import { Col, Row, Text, UiIcon, UiSwitch } from "../../../components/elements";
import "animate.css";

interface Props {
  backMainTab: () => void;
}

const EmailNotifications = ({ backMainTab }: Props) => {
  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <UiIcon icon="bytesize:arrow-left" onClick={backMainTab} />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Push notifications
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
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
        <UiSwitch />
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
        <UiSwitch />
      </Row>
      <Row
        sx={{
          margin: "10px 0px",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Text>Direct messages</Text>
        <UiSwitch />
      </Row>
    </Col>
  );
};

export default EmailNotifications;
