import React from "react";
import { Divider } from "@mui/material";
import { Col, Row, Text, UiIcon, UiSwitch } from "../../../components/elements";

import "animate.css";

interface Props {
  backMainTab: () => void;
}

const LocationInformation = ({ backMainTab }: Props) => {
  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <UiIcon icon="bytesize:arrow-left" onClick={backMainTab} />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Location Information
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
      <Text sx={{ margin: "5px 0px", color: "text.disabled" }}>
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
        <UiSwitch />
      </Row>
    </Col>
  );
};

export default LocationInformation;
