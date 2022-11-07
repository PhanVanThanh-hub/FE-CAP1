import { Avatar, Box, Collapse, Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { PopoverMenuPost, PopoverSharePost } from "./Popover";
import { Col, Row, Text, UiIcon } from "../elements";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useHistory } from "react-router-dom";
import { useBoolBag } from "../../hooks";

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

export const PostOwner = () => {
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

export const Content = () => {
  const history = useHistory();

  return (
    <Col sx={{ margin: "10px 0px" }}>
      <Text onClick={() => history.push("/post")}>
        We are proud of you, Cristiano Ronaldo #welldone
      </Text>
      <Row
        sx={{
          marginTop: "10px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Row sx={{ alignItems: "center" }}>
          <UiIcon icon="bxs:like" />
          <Text sx={{ marginLeft: "10px" }}>Tr Quang and 243 others</Text>
        </Row>
        <Row>
          <Text>20 comments 4 shares</Text>
        </Row>
      </Row>
    </Col>
  );
};

export const Comment = ({ comment }: { comment: string }) => {
  return (
    <Row sx={{ marginTop: "10px" }}>
      <Avatar sx={{ marginRight: "6px", marginTop: "2px" }} />
      <Col>
        <Col
          sx={{
            borderRadius: "18px",
            backgroundColor: "button.primary",
            padding: "8px 12px",
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>Thanh</Text>
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

export const UserInteraction = () => {
  const [comments, setComments] = useState(["1231", "321321"]);
  const [comment, setComment] = useState<string>("");
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

      {openComments && (
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
                  backgroundColor: "button.primary",
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
        // border: "1px solid white",
        backgroundColor: "background.paper",
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
