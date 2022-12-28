import React, { useEffect, useState } from "react";
import { Avatar, Box, Divider, Grid, TextField } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import { PopoverSharePost,PopoverMenuPost } from "../../../components/shared/Popover";
import { Content, Comment, PostOwner } from "../../../components/shared/Post";
import { useBoolBag } from "../../../hooks";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { ParamsProps } from "../../../types/models/app";
import Moment from 'react-moment';

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
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const { boolBag, setBoolBag } = useBoolBag({
    liked: false,
    openComments: false,
  });
  const { liked, openComments } = boolBag;

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
        <Row onClick={() => setBoolBag({ liked: !liked })}>
          <UiIcon icon={liked ? "bxs:like" : "bx:like"} />
          <Text>Like</Text>
        </Row>
        <Row onClick={() => setBoolBag({ openComments: !openComments })}>
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
  const [post, setPost] = useState({image:"",author:"",create_at:"",content:""})
  const parmas = useParams<ParamsProps>();
  const {id} = parmas;
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/post/${id}/`)
      .then(res => setPost(res.data))
      .catch(error => console.log(error))
  }, [])

  const timePost = () => {
    let date = post.create_at;
      return  <div>
            {date && <Moment toNow ago>{date}</Moment>}
        </div>
  }

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
    <Box sx={{ height: "100vh", backgroundColor: "background.default" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={8} sx={{ backgroundColor: "black", color:'red'}}>
            {/* Phần này hiện ảnh bài đăng  */}
            <div>
              {
                <img src={post.image} alt="" width="800px" />
              }
            </div>
        </Grid>

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
            {/* Phần này hiện tên user, ngày đăng bài, comment */}
            <Row>
            <Avatar />
            <Row
              sx={{
              justifyContent: "space-between",
              width: "100%",
              marginLeft: "10px",
            }}
          >
        <Col sx={{ justifyContent: "center", color:'white' }}>
           {post.author}
            <div>
              <Text
                fontSize="caption"
                sx={{ lineHeight: "0.7rem", cursor: "pointer" }}
              >
              {timePost()}
              </Text>
            </div>
        </Col>
        <Row sx={{ alignItems: "center" }}>
          <UiIcon icon="bi:three-dots" onClick={openPopover} />
          <PopoverMenuPost
            open={isOpenPopover}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
          />
        </Row>
      </Row>
      {/* Comment */}
      </Row>
      <UserInteraction/>
      <Row
        sx={{
        alignItems: "center",
        position: "fixed",
        bottom: "10px",
        width: "30%",
        }}
      >
      <Avatar sx={{ height: "2rem", width: "2rem" }} />
        <TextField  placeholder="Write a comment..."
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
function express() {
  throw new Error("Function not implemented.");
}

