import { Icon } from "@iconify/react";
import { Avatar, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Col, Row, Text } from "../../../components/elements";
import { CreatePostModal } from "../../../components/shared/Modal";

const IconStyled: any = {
  width: "24px",
  height: "24px",
  color: "#52734D",
};

const CreatePost = () => {
  const [isOpenModalCreatePost, setIsOpenModalCreatePost] =
    useState<boolean>(false);

  const handleCloseModalCreatePost = () => {
    setIsOpenModalCreatePost(false);
  };

  return (
    <Col
      sx={{
        backgroundColor: "white",
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
            backgroundColor: "#91C788",
            minHeight: "40px",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
          }}
        >
          <Text sx={{ color: "white", marginLeft: "10px" }}>
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
            <Icon icon="gala:image" style={{ ...IconStyled }} />
          </Row>
          <Row sx={{ marginRight: "20px" }}>
            <Icon icon="carbon:play-outline" style={{ ...IconStyled }} />
          </Row>
          <Row sx={{ marginRight: "20px" }}>
            <Icon icon="bi:emoji-smile" style={{ ...IconStyled }} />
          </Row>
          <Row sx={{ marginRight: "20px" }}>
            <Icon icon="gis:location-poi-o" style={{ ...IconStyled }} />
          </Row>
        </Row>
        <Button
          sx={{
            backgroundColor: "#52734D",
            color: "white",
            borderRadius: "12px",
            padding: "5px 20px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#52734D",
            },
          }}
        >
          Post
        </Button>
      </Row>
      <CreatePostModal
        handleClose={handleCloseModalCreatePost}
        open={isOpenModalCreatePost}
      />
    </Col>
  );
};

export default CreatePost;
