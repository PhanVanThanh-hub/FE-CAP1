import React, { useState } from "react";
import { Col, Row, Text, UiButton, UiIcon, UiModal } from "../elements";
import { Icon } from "@iconify/react";
import {
  TextField,
  Modal,
  Divider,
  Avatar,
  Button,
  SxProps,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useBoolBag } from "../../hooks";
import { TransitionGroup } from "react-transition-group";
import { getAccessTokenFromStorage } from "../../services/auth";
import { UserInteraction } from "./Post";
import axiosClient from "../../api/axiosClient";
import { light } from "@mui/material/styles/createPalette";
import { array } from "yup";

interface Props {
  open: boolean;
  handleClose: any;
}

const IconStyled: any = {
  width: "24px",
  height: "24px",
  color: "#52734D",
  cursor: "pointer",
};

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} placement="top" classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(12, 7, 10, 0.8)",
    color: "white",
    fontSize: "0.95rem",
    padding: "10px 15px",
  },
}));

const ButtonStyled: SxProps = {
  color: "white",
  borderRadius: "12px",
  padding: "5px 20px",
  textTransform: "capitalize",
};

const ButtonSendStyle: SxProps = {
  ...ButtonStyled,
  backgroundColor: "#52734D",
  "&:hover": {
    backgroundColor: "#91C788",
  },
};

const ButtonSentStyled: SxProps = {
  backgroundColor: "#91C788",
  "&:hover": {
    backgroundColor: "#91C788",
  },
  ...ButtonStyled,
};

const InputProps: SxProps = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    fontSize: "16px",
    width: "90%",
    paddingLeft: "10px",
    backgroundColor: "rgba(221, 255, 188, 0.6)",
    input: {
      padding: "7px 10px",
    },
    "& fieldset": {
      borderColor: "rgba(221, 255, 188, 0.6)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(221, 255, 188, 0.6)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(221, 255, 188, 0.6)",
    },
  },
};

export const SendMessModal = ({ open, handleClose }: Props) => {
  const { boolBag, setBoolBag } = useBoolBag({ sendMess: false });
  const { sendMess } = boolBag;

  return (
    <div>
      <UiModal open={open} onClose={handleClose}>
        <Row sx={{ padding: "5px 20px", alignItems: "center" }}>
          <Icon
            icon="ci:close-big"
            width="30"
            height="30"
            cursor="pointer"
            onClick={handleClose}
          />
          <Text fontSize="subtitle2" sx={{ marginLeft: "10px" }}>
            Send via Direct Message
          </Text>
        </Row>
        <Row sx={{ padding: "5px 20px", alignItems: "center" }}>
          <Icon
            icon="fluent:search-24-regular"
            width="30"
            height="30"
            cursor="pointer"
          />
          <TextField
            placeholder="Looking for people"
            variant="standard"
            sx={{
              marginLeft: "10px",
              input: {
                fontSize: "1rem",
                "&::placeholder": {
                  fontSize: "14px",
                  paddingLeft: "0px",
                },
              },
            }}
          />
        </Row>
        <Divider
          sx={{
            margin: "10px 0px",
            borderColor: "rgba(82, 115, 77, 0.6)",
          }}
        />
        <Col sx={{ padding: "5px 20px" }}>
          <Text sx={{ fontWeight: "bold" }}>Recently</Text>
          <Col sx={{ maxHeight: "300px", overflowY: "auto" }}>
            <Row sx={{ justifyContent: "space-between", margin: "10px 0px" }}>
              <Row sx={{ alignItems: "center", cursor: "pointer" }}>
                <Avatar />
                <Text sx={{ marginLeft: "10px" }}>Elian</Text>
              </Row>
              {sendMess ? (
                <Button
                  sx={{
                    ...ButtonSentStyled,
                  }}
                >
                  Sent
                </Button>
              ) : (
                <Button
                  sx={{
                    ...ButtonSendStyle,
                  }}
                  onClick={() => setBoolBag({ sendMess: true })}
                >
                  Send
                </Button>
              )}
            </Row>
          </Col>
        </Col>
        <Col sx={{ padding: "5px 20px" }}>
          <Text sx={{ fontWeight: "bold" }}>Group chat</Text>
          <Col sx={{ maxHeight: "300px", overflowY: "auto" }}>
            <Row sx={{ justifyContent: "space-between", margin: "10px 0px" }}>
              <Row sx={{ alignItems: "center", cursor: "pointer" }}>
                <Avatar />
                <Text sx={{ marginLeft: "10px" }}>Elian</Text>
              </Row>
              <Button
                sx={{
                  ...ButtonSendStyle,
                }}
              >
                Send
              </Button>
            </Row>
          </Col>
        </Col>
        <Divider
          sx={{
            margin: "10px 0px",
            borderColor: "rgba(82, 115, 77, 0.6)",
          }}
        />
        <Row
          sx={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
            ...InputProps,
          }}
        >
          <OutlinedInput
            placeholder="Add a message"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Icon icon="akar-icons:send" width="20" height="20" />
                </IconButton>
              </InputAdornment>
            }
          />
        </Row>
      </UiModal>
    </div>
  );
};
export const CreatePostModal = ({ open, handleClose }: Props) => {
  //code add post
  const [content, setContent] = useState("");
  const [images, setImages] = useState("");

  // const handleImange = (event:any) =>{
  //   setImages(event.target.files[1]);
  // };
  const handleImange = (event: any) => {
    setImages(event.target.files[0]);
  };

  const aut = getAccessTokenFromStorage();
  const NewPost = () => {
    window.location.reload();
    const uploadData = new FormData();
    uploadData.append("content", content);
    // for(var i = 0; i<images.length;i++){
    // }
    if (images) {
      uploadData.append("images", images, "images.name");
    }
    // uploadData.append('images', images)
    const url = "post/";
    axiosClient
      .post(url, uploadData, {
        headers: {
          Authorization: `Bearer ${aut}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <UiModal open={open} onClose={handleClose} padding="20px 30px">
        <Col>
          <Row sx={{ alignItems: "center", justifyContent: "center" }}>
            <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
              Create Post
            </Text>
          </Row>
          <Row sx={{ alignItems: "center" }}>
            <Avatar />
            <Text sx={{ marginLeft: "10px", fontWeight: "bold" }}>Elian</Text>
          </Row>

          <TextField
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="I'd like to say..."
            multiline
            sx={{
              overflowY: "auto",
              height: "200px",
              width: "100%",
              "& .MuiOutlinedInput-input": {
                fontSize: "1rem",
                lineHeight: "20px",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "yellow",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
          />
          <Row>
            <input
              accept="image/jpeg,image/png,image/gif"
              type="file"
              name="file"
              multiple
              onChange={(e) => {
                handleImange(e);
              }}
            />
          </Row>

          <Row
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Row
              sx={{
                "& .MuiBox-root": {
                  marginRight: "20px",
                },
              }}
            >
              <Row>
                <StyledTooltip title="Add Image">
                  <UiIcon icon="gala:image" />
                </StyledTooltip>
              </Row>
              <Row>
                <StyledTooltip title="Video/Audio">
                  <UiIcon icon="carbon:play-outline" />
                </StyledTooltip>
              </Row>
              <Row>
                <StyledTooltip title="Feelings / Activity">
                  <UiIcon icon="bi:emoji-smile" />
                </StyledTooltip>
              </Row>
              <Row>
                <StyledTooltip title="Location">
                  <UiIcon icon="gis:location-poi-o" />
                </StyledTooltip>
              </Row>
            </Row>
            <UiButton
              sx={{ color: "white" }}
              type="submit"
              color="primary"
              onClick={() => NewPost()}
            >
              Post
            </UiButton>
          </Row>
        </Col>
      </UiModal>
    </div>
  );
};
