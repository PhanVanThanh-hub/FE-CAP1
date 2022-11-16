import React from "react";
import { Col, Row, Text, UiButton } from "../../../components/elements";
import ModalVideo from "react-modal-video";
import { useBoolBag } from "../../../hooks";
import "./video.scss";
import { CardMedia } from "@mui/material";
import img from "../../../assets/image/auth/sign-in.png";

const Video = () => {
  const { boolBag, setBoolBag } = useBoolBag({ isOpenVideo: false });
  const { isOpenVideo } = boolBag;
  return (
    <Col sx={{ margin: "20px 0px" }}>
      <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
        Video (2)
      </Text>
      <Row
        sx={{
          width: "90%",
          justifyContent: "space-around",
          margin: "10px 0px",
        }}
      >
        <CardMedia
          component="img"
          image={img}
          sx={{
            height: "15.625em",
            width: "25em",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={() => setBoolBag({ isOpenVideo: true })}
        />
        <CardMedia
          component="img"
          image={img}
          sx={{
            height: "15.625em",
            width: "25em",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={() => setBoolBag({ isOpenVideo: true })}
        />
      </Row>
      <ModalVideo
        channel="custom"
        isOpen={isOpenVideo}
        url="../../../assets/video/video1.mp4"
        onClose={() => setBoolBag({ isOpenVideo: false })}
      />
    </Col>
  );
};

export default Video;
