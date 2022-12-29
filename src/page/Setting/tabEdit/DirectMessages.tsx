import React from "react";
import { Divider } from "@mui/material";
import { Col, Row, Text, UiIcon, UiSwitch } from "../../../components/elements";
import "animate.css";

interface Props {
  backMainTab: () => void;
}

const DirectMessages = ({ backMainTab }: Props) => {
  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <UiIcon icon="bytesize:arrow-left" onClick={backMainTab} />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Direct Messages
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
      <Col sx={{ marginBottom: "20px" }}>
        <Row sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
            Allow pending messages from everyone.
          </Text>
          <UiSwitch />
        </Row>
        <Text sx={{ marginTop: "10px" }}>
          Tell people you don't follow to send you pending messages and add you
          to group chats. To reply to their message, you need to accept this
          pending message.
        </Text>
      </Col>
      <Col>
        <Row sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
            Show reading report.
          </Text>
          <UiSwitch />
        </Row>
        <Text sx={{ marginTop: "10px" }}>
          Notify the people you're messaging when you've seen their messages.
          Read confirmation will not be displayed on pending messages.
        </Text>
      </Col>
    </Col>
  );
};

export default DirectMessages;
