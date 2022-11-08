import React from "react";
import { Avatar, Divider } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { COLOR } from "../../../constants";

const Information = () => {
  return (
    <Col
      sx={{ alginItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Col
        sx={{
          height: "95vh",
        }}
      >
        <Col
          sx={{
            borderRadius: "12px",
            backgroundColor: "background.paper",
            padding: "20px 0px",
            alignItems: "center",
          }}
        >
          <Row
            sx={{
              borderRadius: "50%",
              border: `1px solid ${COLOR.icon.onl} `,
              height: "125px",
              width: "125px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ height: "100px", width: "100px" }} />
          </Row>
          <Row sx={{ margin: "5px 0px" }}>
            <UiIcon icon="ci:dot-02-s" color={COLOR.icon.onl} />
          </Row>
          <Text>available</Text>
          <Text>Alene</Text>
          <Text sx={{ color: "text.disabled", marginTop: "5px" }}>
            Sr. Customer Manager
          </Text>
        </Col>
        <Col
          sx={{
            marginTop: "20px",
            borderRadius: "12px",
            backgroundColor: "background.paper",
            padding: "20px 15px",
          }}
        >
          <Text sx={{ marginBottom: "10px", fontWeight: "bold" }}>
            Information
          </Text>
          <Row sx={{ margin: "5px 0px" }}>
            <UiIcon icon="ep:location-information" />
            <Text fontSize="caption" sx={{ marginLeft: "5px" }}>
              32188 Sips Parkways, U.S
            </Text>
          </Row>
          <Row sx={{ margin: "5px 0px" }}>
            <UiIcon icon="akar-icons:phone" />
            <Text fontSize="caption" sx={{ marginLeft: "5px" }}>
              995-250-1803
            </Text>
          </Row>
          <Row sx={{ margin: "5px 0px" }}>
            <UiIcon icon="fluent:mail-16-filled" />
            <Text fontSize="caption" sx={{ marginLeft: "5px" }}>
              O’Keefe@codedtheme.com
            </Text>
          </Row>
          <Divider sx={{ color: "divider", margin: "10px 0px" }} />
        </Col>
      </Col>
    </Col>
  );
};
export default Information;
