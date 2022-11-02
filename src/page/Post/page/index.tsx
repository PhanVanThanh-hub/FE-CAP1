import { Icon } from "@iconify/react";
import { Avatar, Box, Divider, Grid, TextField } from "@mui/material";
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

const Comment = () => {
  return (
    <Row sx={{ marginTop: "10px" }}>
      <Avatar sx={{ marginRight: "6px", marginTop: "2px" }} />
      <Col>
        <Col
          sx={{
            borderRadius: "18px",
            backgroundColor: "#F0F2F5",
            padding: "8px 12px",
          }}
        >
          <Text>Thanh</Text>
          <Text>
            Right-click on an element (or a blank area), and choose "Inspect" or
            "Inspect Element" to see what elements are made up of (you will see
            both the HTML and the CSS).
          </Text>
        </Col>
        <Row
          sx={{
            marginTop: "5px",
            "& .MuiTypography-root": {
              cursor: "pointer",
            },
          }}
        >
          <Text>Like</Text>
          <Text sx={{ margin: "0px 20px" }}>Reply</Text>
          <Text>3 day ago</Text>
        </Row>
      </Col>
    </Row>
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
      <Col>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Col>
    </Col>
  );
};

const PhotoViewer = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={8} sx={{ backgroundColor: "black" }}></Grid>
        <Grid
          item
          xs={4}
          sx={{ padding: "10px 20px", height: "90%", overflowY: "auto" }}
        >
          <Col
            sx={{
              justifyContent: "space-between",
              height: "100%",
              position: "relative",
              width: "100%",
              paddingTop: "20px",
            }}
          >
            <PostOwner />
            <Content />
            <UserInteraction />
            <Row
              sx={{
                alignItems: "center",
                position: "fixed",
                bottom: "10px",
                width: "30%",
              }}
            >
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default PhotoViewer;
