import React from "react";
import { Col, Row, Text, UiButton } from "../../../components/elements";
import { UiTable } from "../../../components/elements/UiTable";

const Investment = () => {
  return (
    <Col sx={{ margin: "20px 0px" }}>
      <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
        Investment
      </Text>
      <Row
        sx={{
          alginItems: "center",
          width: "100%",
          margin: "20px 0px",
        }}
      >
        <Row
          sx={{
            height: "50px",
            width: "70%",
            borderRadius: "24px",
            backgroundColor: "background.default",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Row sx={{ height: "100%", width: "100%", backgroundColor: "red" }} />
          <Text sx={{ position: "absolute", top: "25%", right: "5%" }}>
            $180/$500
          </Text>
        </Row>
      </Row>
      <UiTable />
      <Row sx={{ margin: "10px 0px", justifyContent: "center" }}>
        <Row sx={{ width: "50%", justifyContent: "space-around" }}>
          <UiButton>Deal with startup</UiButton>
        </Row>
      </Row>
    </Col>
  );
};

export default Investment;
