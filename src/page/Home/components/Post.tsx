import { Icon } from "@iconify/react";
import { Avatar, Box, Divider, TextField } from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";

const PostOwner = () => {
  return (
    <Row>
      <Avatar />
      <Row
        sx={{
          justifyContent: "space-between",
          width: "100%",
          marginLeft: "10px",
        }}
      >
        <Col sx={{ justifyContent: "center" }}>
          <Text>Nguyen</Text>
          <Text fontSize="caption" sx={{ lineHeight: "0.7rem" }}>
            3 day ago
          </Text>
        </Col>
        <Row sx={{ alignItems: "center" }}>
          <Row sx={{ alignItems: "center", marginRight: "30px" }}>
            <Icon
              icon="ant-design:plus-outlined"
              color="rgba(8, 232, 52, 0.8)"
            />
            <Text sx={{ marginLeft: "5px" }}>Follow</Text>
          </Row>
          <Icon icon="bi:three-dots" cursor="pointer" />
        </Row>
      </Row>
    </Row>
  );
};

const Content = () => {
  return (
    <Col sx={{ margin: "10px 0px" }}>
      <Text>We are proud of you, Cristiano Ronaldo #welldone</Text>
      <Row
        sx={{
          marginTop: "10px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Row sx={{ alignItems: "center" }}>
          <Icon icon="bxs:like" />
          <Text sx={{ marginLeft: "10px" }}>Tr Quang and 243 others</Text>
        </Row>
        <Row>20 comments 4 shares</Row>
      </Row>
    </Col>
  );
};

const UserInteraction = () => {
  return (
    <Col>
      <Divider />
      <Row
        sx={{
          margin: "5px 0px",
          alignItems: "center",
          justifyContent: "space-around",
          "& .MuiBox-root": {
            alignItems: "center",
            cursor: "pointer",
            "& .MuiTypography-root": {
              marginLeft: "10px",
            },
          },
        }}
      >
        <Row>
          <Icon icon="bx:like" />
          <Text>Like</Text>
        </Row>
        <Row>
          <Icon icon="akar-icons:comment" />
          <Text>Comment</Text>
        </Row>
        <Row>
          <Icon icon="el:share-alt" />
          <Text>Share</Text>
        </Row>
      </Row>
      <Divider />
      <Row sx={{ margin: "20px 0px 10px", alignItems: "center" }}>
        <Avatar sx={{ height: "2rem", width: "2rem" }} />
        <TextField
          placeholder="Write a comment..."
          sx={{
            marginLeft: "10px",
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              fontSize: "16px",
              paddingLeft: "5px",
              backgroundColor: "#DDFFBC",
            },
            input: {
              padding: "7px 10px",
            },
          }}
        />
      </Row>
    </Col>
  );
};

const Post = () => {
  return (
    <Col
      sx={{
        width: "100%",
        marginTop: "20px",
        borderRadius: "12px",
        border: "1px solid #52734D",
      }}
    >
      <Box sx={{ padding: "10px 20px" }}>
        <PostOwner />
        <Content />
        <UserInteraction />
      </Box>
    </Col>
  );
};

export default Post;
