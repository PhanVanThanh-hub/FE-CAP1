import { Avatar, AvatarGroup, CardMedia } from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";
import { formatMoney } from "../../../until/helpers/functions";
import image from "../../../assets/image/auth/sign-up.png";

const Project = () => {
  return (
    <Col
      sx={{
        borderRadius: "12px",
        padding: "15px 20px",
        backgroundColor: "background.default",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          margin: "10px 0px",
          height: "220px",
          width: "100%",
          borderRadius: "12px",
        }}
        image={image}
        alt="Paella dish"
      />
      <Text fontSize="body1">Project Name</Text>
      <Text
        sx={{
          margin: "5px 0px",
          maxHeight: "50px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Row sx={{ alignItems: "center" }}>
        <Text fontSize="body1" sx={{ marginRight: "10px" }}>
          Team Member:
        </Text>
        <AvatarGroup max={4}>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
      </Row>
      <Col
        sx={{
          margin: "10px 0px",
        }}
      >
        <Text>
          Amount called for investment :<strong>{formatMoney(1200)}</strong>{" "}
        </Text>
        <Text>
          for : <strong>45%</strong> of the company's shares
        </Text>
      </Col>
    </Col>
  );
};

export default Project;
