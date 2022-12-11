import React from "react";
import { Col, Row, Text, UiIcon } from "../../../components/elements";

const Introduce = () => {
  return (
    <Col
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "12px",
      }}
    >
      <Col sx={{ padding: "10px 20px" }}>
        <Text fontSize="subtitle2" sx={{ fontWeight: "bold" }}>
          Introduce
        </Text>
        <Row sx={{ alignItems: "center" }}>
          <UiIcon icon="ic:baseline-local-phone" />
          <Text fontSize="body1" sx={{ marginLeft: "10px" }}>
            093 3202 321
          </Text>
        </Row>
      </Col>
    </Col>
  );
};

export default Introduce;
