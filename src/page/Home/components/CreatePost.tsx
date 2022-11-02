import { Icon } from "@iconify/react";
import { Avatar, Box, Button, TextField } from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";

const CreatePost = () => {
  return (
    <Col
      sx={{
        backgroundColor: "#91C788",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 5px",
        marginTop: "12px",
        borderRadius: "24px",
      }}
    >
      <Row
        sx={{
          alignItems: "center",
          width: "90%",
          justifyContent: "space-around",
        }}
      >
        <Avatar sx={{ width: "40px", height: "40px" }} />
        <Box
          sx={{
            marginLeft: "10px",
            width: "100%",
            borderRadius: "24px",
            backgroundColor: "white",
            minHeight: "40px",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Text sx={{ color: "#B0B3B8", marginLeft: "10px" }}>
            What's on your mind, Thanh?
          </Text>
        </Box>
      </Row>
      <Row
        sx={{
          marginLeft: "10px",
          marginTop: "20px",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "90%",
        }}
      >
        <Row>
          <Row sx={{ marginRight: "20px" }}>
            <Icon icon="gala:image" color="#52734D" height="24" width="24" />
          </Row>
          <Row sx={{ marginRight: "20px" }}>
            <Icon
              icon="carbon:play-outline"
              color="#52734D"
              height="24"
              width="24"
            />
          </Row>
          <Row sx={{ marginRight: "20px" }}>
            <Icon
              icon="bi:emoji-smile"
              color="#52734D"
              height="24"
              width="24"
            />
          </Row>
          <Row sx={{ marginRight: "20px" }}>
            <Icon
              icon="gis:location-poi-o"
              color="#52734D"
              height="24"
              width="24"
            />
          </Row>
        </Row>
        <Button
          sx={{
            backgroundColor: "#52734D",
            color: "white",
            borderRadius: "12px",
            padding: "5px 20px",
            textTransform: "capitalize",
          }}
        >
          Post
        </Button>
      </Row>
    </Col>
  );
};

export default CreatePost;
