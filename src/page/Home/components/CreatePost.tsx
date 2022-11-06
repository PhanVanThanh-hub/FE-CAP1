import React, { useState } from "react";
import { Avatar, Box } from "@mui/material";
import { Col, Row, Text, UiButton, UiIcon } from "../../../components/elements";
import { CreatePostModal } from "../../../components/shared/Modal";

const CreatePost = () => {
  const [isOpenModalCreatePost, setIsOpenModalCreatePost] =
    useState<boolean>(false);

  const handleCloseModalCreatePost = () => {
    setIsOpenModalCreatePost(false);
  };

  return (
    <Col
      sx={{
        backgroundColor: "background.paper",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 5px",
        marginTop: "12px",
        borderRadius: "24px",
        borderColorRight: "red",
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
          onClick={() => setIsOpenModalCreatePost(true)}
          sx={{
            marginLeft: "10px",
            width: "100%",
            borderRadius: "24px",
            backgroundColor: "#3282B8",
            minHeight: "40px",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
          }}
        >
          <Text sx={{ marginLeft: "10px" }}>What's on your mind, Thanh?</Text>
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
            <UiIcon icon="gala:image" />
          </Row>
          <Row sx={{ marginRight: "20px" }}>
            <UiIcon icon="carbon:play-outline" />
          </Row>
          <Row sx={{ marginRight: "20px" }}>
            <UiIcon icon="bi:emoji-smile" />
          </Row>
          <Row sx={{ marginRight: "20px" }}>
            <UiIcon icon="gis:location-poi-o" />
          </Row>
        </Row>
        <UiButton>Post</UiButton>
      </Row>
      <CreatePostModal
        handleClose={handleCloseModalCreatePost}
        open={isOpenModalCreatePost}
      />
    </Col>
  );
};

export default CreatePost;
