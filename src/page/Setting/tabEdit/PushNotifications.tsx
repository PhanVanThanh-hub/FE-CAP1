import { Divider } from "@mui/material";
import React from "react";
import { Col, Row, Text, UiIcon, UiSwitch } from "../../../components/elements";

import "animate.css";

interface Props {
  backMainTab: () => void;
}

const PushNotifications = ({ backMainTab }: Props) => {
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
          marginTop: "10px",
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
    </Col>
  );
};

export default PushNotifications;
