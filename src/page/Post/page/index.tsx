import React, { useState } from "react";
import { Avatar, Box, Divider, Grid, TextField } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { PopoverSharePost } from "../../../components/shared/Popover";
import { Content, Comment, PostOwner } from "../../../components/shared/Post";

// const PostOwner = () => {
//   return (
//     <Row>
//       <Avatar />
//       <Row
//         sx={{
//           justifyContent: "space-between",
//           width: "100%",
//           marginLeft: "10px",
//         }}
//       >
//         <Col sx={{ justifyContent: "center" }}>
//           <Text>Nguyen</Text>
//           <Text fontSize="caption" sx={{ lineHeight: "0.7rem" }}>
//             3 day ago
//           </Text>
//         </Col>
//         <Row sx={{ alignItems: "center" }}>
//           <Row sx={{ alignItems: "center", marginRight: "30px" }}>
//             <Icon
//               icon="ant-design:plus-outlined"
//               color="rgba(8, 232, 52, 0.8)"
//             />
//             <Text sx={{ marginLeft: "5px" }}>Follow</Text>
//           </Row>
//           <Icon icon="bi:three-dots" cursor="pointer" />
//         </Row>
//       </Row>
//     </Row>
//   );
// };

// const Content = () => {
//   return (
//     <Col sx={{ margin: "10px 0px" }}>
//       <Text>We are proud of you, Cristiano Ronaldo #welldone</Text>
//       <Row
//         sx={{
//           marginTop: "10px",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <Row sx={{ alignItems: "center" }}>
//           <Icon icon="bxs:like" />
//           <Text sx={{ marginLeft: "10px" }}>Tr Quang and 243 others</Text>
//         </Row>
//         <Row>20 comments 4 shares</Row>
//       </Row>
//     </Col>
//   );
// };

const UserInteraction = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isOpenComments, setIsOpenComments] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const openPopover = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const isOpenPopover = Boolean(anchorEl);
  return (
    <Col>
      <Divider sx={{ borderColor: "divider" }} />
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
        <Row onClick={() => setIsLiked(!isLiked)}>
          <UiIcon icon={isLiked ? "bxs:like" : "bx:like"} />
          <Text>Like</Text>
        </Row>
        <Row onClick={() => setIsOpenComments(!isOpenComments)}>
          <UiIcon icon="akar-icons:comment" />
          <Text>Comment</Text>
        </Row>
        <Row onClick={openPopover}>
          <UiIcon icon="el:share-alt" />
          <Text>Share</Text>
        </Row>
        <PopoverSharePost
          open={isOpenPopover}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
        />
      </Row>
      <Divider sx={{ borderColor: "divider" }} />
      <Col>
        <Comment comment="kdsakdokadksaodksaokdosakd" />
        <Comment comment="kdsakdokadksaodksaokdosakd" />
        <Comment comment="kdsakdokadksaodksaokdosakd" />
        <Comment comment="kdsakdokadksaodksaokdosakd" />
        <Comment comment="kdsakdokadksaodksaokdosakd" />
        <Comment comment="kdsakdokadksaodksaokdosakd" />
        <Comment comment="kdsakdokadksaodksaokdosakd" />
      </Col>
    </Col>
  );
};

const PhotoViewer = () => {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "background.default" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={8} sx={{ backgroundColor: "black" }}></Grid>
        <Grid
          item
          xs={4}
          sx={{
            padding: "10px 20px",
            height: "90%",
            overflowY: "auto",
            backgroundColor: "background.paper",
          }}
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
                    backgroundColor: "button.primary",
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
