import { Icon } from "@iconify/react";
import { Avatar, Box, Collapse, Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { PopoverMenuPost, PopoverSharePost } from "./Popover";
import { Col, Row, Text } from "../elements";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

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

const PostOwner = () => {
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
          <Text>Nguyen</Text>
          <StyledTooltip title="11th June, 2019, 12am UTC">
            <div>
              <Text
                fontSize="caption"
                sx={{ lineHeight: "0.7rem", cursor: "pointer" }}
              >
                3 day ago
              </Text>
            </div>
          </StyledTooltip>
        </Col>
        <Row sx={{ alignItems: "center" }}>
          <Row sx={{ alignItems: "center", marginRight: "30px" }}>
            <Icon
              icon="ant-design:plus-outlined"
              color="rgba(8, 232, 52, 0.8)"
            />
            <Text sx={{ marginLeft: "5px" }}>Follow</Text>
          </Row>
          <Icon icon="bi:three-dots" cursor="pointer" onClick={openPopover} />
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

const Comment = ({ comment }: { comment: string }) => {
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
          <Text>{comment}</Text>
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
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [comments, setComments] = useState(["1231", "321321"]);
  const [comment, setComment] = useState<string>("");
  const [isOpenComments, setIsOpenComments] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      setComments((prev) => [...prev, e.target.value]);
      setComment("");
    }
  };

  const openPopover = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const isOpenPopover = Boolean(anchorEl);

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
        <Row onClick={() => setIsLiked(!isLiked)}>
          <Icon icon={isLiked ? "bxs:like" : "bx:like"} />
          <Text>Like</Text>
        </Row>
        <Row onClick={() => setIsOpenComments(!isOpenComments)}>
          <Icon icon="akar-icons:comment" />
          <Text>Comment</Text>
        </Row>
        <Row onClick={openPopover}>
          <Icon icon="el:share-alt" />
          <Text>Share</Text>
        </Row>
        <PopoverSharePost
          open={isOpenPopover}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
        />
      </Row>

      {isOpenComments && (
        <Col>
          <Divider />
          <TransitionGroup>
            {comments.map((comment) => (
              <Collapse key={comment}>
                <Comment comment={comment} />
              </Collapse>
            ))}
          </TransitionGroup>
          <Row sx={{ margin: "20px 0px 10px", alignItems: "center" }}>
            <Avatar sx={{ height: "2rem", width: "2rem" }} />
            <TextField
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
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
              onKeyDown={keyPress}
            />
          </Row>
        </Col>
      )}
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