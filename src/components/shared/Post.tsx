import { Avatar, Box, Collapse, Divider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { PopoverMenuPost, PopoverSharePost } from "./Popover";
import { Col, Row, Text, UiIcon } from "../elements";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useHistory } from "react-router-dom";
import { useBoolBag } from "../../hooks";
import { COLOR } from "../../constants";
import Moment from 'react-moment';
import { useParams } from "react-router-dom";
import { ParamsProps } from '../../types/models/app';
import axios from "axios";
import { getAccessTokenFromStorage } from "../../services/auth";
import axiosClient from '../../api/axiosClient'

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(12, 7, 10, 0.8)",
    color: "white",
    fontSize: "0.95rem",
    padding: "10px 15px",
  },
}));

export const PostOwner = ({postData}:{postData: any}) => {
  const nameUser = () => {
    if(postData){
      return  <div>
            {postData.author && <Text>{postData.author}</Text>}
        </div>
    }
  }

  const timePost = () => {
    let date = postData.create_at;
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
           {nameUser()}
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
          <Row sx={{ alignItems: "center", marginRight: "30px" }}>
            <UiIcon icon="ant-design:plus-outlined" />
            <Text sx={{ marginLeft: "5px" }}>Follow</Text>
          </Row>
          <UiIcon icon="bi:three-dots" onClick={openPopover} />
          <PopoverMenuPost
            open={isOpenPopover}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
          />
        </Row>
      </Row>
    </Row>
  );
};

export const Content = ({postData}:{postData: any}) => {
  const history = useHistory();
  const viewPost = () => {
    if(postData){
      return  <div>
            {postData.content && <Text>{postData.content}</Text>}
            {postData.image && <img onClick={() => history.push(`/post/${postData.id}`)} src={postData?.image} alt="" width="450px"/>}
        </div>
    }
  }
  const [posts, setPosts] = useState([]);
  const parmas = useParams<ParamsProps>();
  const {id} = parmas;
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/get-comment/${postData.id}/`)
        .then(res => setPosts(res.data))
        .catch(error => console.log(error))
},[])
  const sumComment = () => {
    let sum = 0;
      posts.forEach(function(value){
        sum++;
      })
      return sum + " comment"
  }

  const [likes, setLikes] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/like/${postData.id}/`)
        .then(res => setLikes(res.data))
        .catch(error => console.log(error))
  },[])
  const sumLike =() =>{
    let sum = 0;
    likes.forEach(function(value){
      sum++;
      {likes.map((likeData:{author_like:any}) => (
        <Collapse key={likeData.author_like[1]}>
          <Like likeData={likeData} />
        </Collapse>
      ))}
    })
    sum--;
    if(sum >=1)
      return 'and ' + sum + ' others'
        
    
  }
  return (
    <Col sx={{ margin: "10px 0px" }}> 
      {viewPost()}
      <Row
        sx={{
          marginTop: "10px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Row sx={{ alignItems: "center" }}>
          <UiIcon icon="bxs:like" />
          <Text sx={{ marginLeft: "10px" }}>
          <TransitionGroup>
            {likes.map((likeData:{author_like:any}) => (
              <Collapse key={likeData.author_like[1]}>
                <Like likeData={likeData} />
              </Collapse>
            ))}
          </TransitionGroup>
           {sumLike()}
          </Text>
        </Row>
        <Row>
          <Text>
              {sumComment()}  
          </Text>
        </Row>
      </Row>
    </Col>
  );
};
// Giao dien Comment

export const Comment = ({comment}: {comment: any}) => {
  const nameUser = () => {
    if(comment){
      return  <div>
            {comment.author_comment && <Text>{comment.author_comment}</Text>}
        </div>
    }
  }
  const timeComment = () => {
    let date = comment.create_at;
      return  <div>
            {date && <Moment toNow ago>{date}</Moment>}
        </div>
  }
  const viewComment = () => {
    if(comment){
      return  <div >
            {comment.content && <Text>{comment.content}</Text>}
        </div>
    }
  }
  return (
    <Row sx={{ marginTop: "10px" }}>
      <Avatar sx={{ marginRight: "6px", marginTop: "2px" }} />
      <Col>
        <Col
          sx={{
            borderRadius: "18px",
            backgroundColor: "background.default",
            padding: "8px 12px",
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>{nameUser()}</Text>
          {viewComment()}

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
          <Text>{timeComment()}</Text>
        </Row>
      </Col>
    </Row>
  );
};

export const Like = ({likeData}: {likeData:any}) => {
  const listLike = () => {
    if(likeData){
      return likeData.author_like && <Text>{likeData.author_like}</Text>
    }
  }
  return (
    <Row >
     {listLike()}
    </Row>
  )
}

export const UserInteraction = ({postData}:{postData: any}) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [like, setLike] = useState("");
  const [likes, setLikes] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const { boolBag, setBoolBag } = useBoolBag({
    liked: false,
    openComments: false,
  });
  const { liked, openComments } = boolBag;


  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      setComment("");
      NewComment()
    }
  };

  const openPopover = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };
// Post comment
  const aut = getAccessTokenFromStorage();
  const postId = postData.id
  const NewComment = () => {
  window.location.reload();
  const uploadData = new FormData();
  uploadData.append('comment', comment);
  uploadData.append('postId', postId);
  const url = "comment/";
  axiosClient
    .post(url,uploadData,{
      headers: {
        Authorization: `Bearer ${aut}`,
      },
    })
    .then(res =>  console.log(res))
    .catch(error => console.log(error))
  }
// Get comment
  const isOpenPopover = Boolean(anchorEl);
  useEffect(() => {
      axios.get(`http://127.0.0.1:8000/get-comment/${postData.id}/`)
          .then(res => setComments(res.data))
          .catch(error => console.log(error))
  },[])
// Like
useEffect(() => {
  axios.get('http://127.0.0.1:8000/like/')
      .then(res => setLikes(res.data))
      .catch(error => console.log(error))
},[])



const PutLike= () => {
  window.location.reload();
  const uploadData = new FormData();
  // uploadData.append('likeId', likeId);
  uploadData.append('postId', postId);
  const url = "like/";
  axiosClient
    .post(url,uploadData,{
      headers: {
        Authorization: `Bearer ${aut}`,
      },
    })
    .then(res =>  console.log(res))
    .catch(error => console.log(error))
  }
  return (
    <Col>
      <Divider />
      <Row
        sx={{
          margin: "10px 0px",
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
        <Row  onClick={() => setBoolBag({ liked: !liked }) }>
          <UiIcon icon={liked ? "bxs:like" : "bx:like"} />  
          <Row onClick={() => PutLike()}>
            
            <Text value={'1'} onClick={() => setLike('1')} >Like</Text>
          </Row>  
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

      {openComments && (
        <Col>
          <Divider />
          <TransitionGroup>
            {comments.map((comment:{id:any}) => (
              <Collapse key={comment.id}>
                <Comment comment={comment} />
              </Collapse>
            ))}
          </TransitionGroup>
          <Row sx={{ margin: "20px 0px 10px", alignItems: "center" }}>
            <Avatar sx={{ height: "2rem", width: "2rem" }} />

            <TextField
              placeholder="Write a comment..."
              value={comment} onChange={(e) => setComment(e.target.value)}
              sx={{
                marginLeft: "10px",
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  fontSize: "16px",
                  paddingLeft: "5px",
                  border: `1px solid ${COLOR.border.primary}`,
                },
                input: {
                  padding: "7px 10px",
                },
              }}
              onKeyDown={keyPress}
            />
          </Row>
        </Col>
      )}
    </Col>
  );
};


const Post = ({postData}:{postData: any}) => {
  return (
    <Col
      sx={{
        width: "100%",
        marginTop: "20px",
        borderRadius: "12px",
        // border: "1px solid white",
        backgroundColor: "background.paper",
      }}
    >
      
      <Box sx={{ padding: "10px 20px" }}>
        <PostOwner postData={postData} />
        <Content postData = {postData} />
        <UserInteraction postData={postData} />
      </Box>
    </Col>
  );
};

export default Post;
