import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Divider,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import {
  Col,
  Row,
  Text,
  UiIcon,
  UiToolTip,
} from "../../../components/elements";
import { styled } from "@mui/material/styles";
import { COLOR } from "../../../constants";
import UiScrollBar from "../../../components/elements/UiScrollBar";
import { BoxChatApiItem, ListBoxChatApiItem } from "../../../types/models/chat";
import { formatDate, timeAgo } from "../../../until/helpers";
import { ProfileApiItem } from "../../../types/models/auth";
import useWebSocket from "react-use-websocket";
import moment from "moment";
import { getUsernameFromStorage } from "../../../services/auth";

interface Props {
  listBoxChat?: ListBoxChatApiItem;
  handleChooseBoxChat: (
    box_chat_id: string,
    user_box_chat: ProfileApiItem
  ) => void;
  forceRerender: React.Dispatch<React.SetStateAction<number>>;
}

interface BoxChatProps {
  boxChat: BoxChatApiItem;
  handleChooseBoxChat: (
    box_chat_id: string,
    user_box_chat: ProfileApiItem
  ) => void;
  avatar: string;
  forceRerender: React.Dispatch<React.SetStateAction<number>>;
}

interface NewMessProps {
  message: string;
  user: number;
  status: boolean;
  create_at: string;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    boxShadow: `0 0 0 0px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      width: "100%",
      height: "100%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
      borderRadius: "50%",
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1.2)",
      opacity: 1,
    },
  },
}));

const BoxChat = ({
  boxChat,
  handleChooseBoxChat,
  avatar,
  forceRerender,
}: BoxChatProps) => {
  const username = getUsernameFromStorage();
  const roomName = `${boxChat.box_chat.box_chat.id}user${username}`;

  const socketUrl = `ws://127.0.0.1:8000/ws/chat/${roomName}/`;
  const { sendJsonMessage, getWebSocket } = useWebSocket(socketUrl, {
    onOpen: () => console.log("Open Test"),
    onClose: () => console.log("WebSocket connection closed."),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event: WebSocketEventMap["message"]) => {
      forceRerender(Date.now());
    },
  });
  return (
    <Col
      key={boxChat.key}
      sx={{ cursor: "pointer" }}
      onClick={() =>
        handleChooseBoxChat(boxChat.box_chat.box_chat.id, boxChat.user_box_chat)
      }
    >
      <Row
        sx={{
          margin: "15px 0px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Row>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: boxChat.box_chat.online
                  ? "rgb(213, 76, 72)"
                  : "success.main",
                color: boxChat.box_chat.online
                  ? "rgb(213, 76, 72)"
                  : "success.main",
              },
            }}
          >
            <Avatar
              alt=""
              src={avatar}
              style={{ height: "60px", width: "60px" }}
            />
          </StyledBadge>
          <Col
            sx={{
              marginLeft: "15px",
              justifyContent: "center",
            }}
          >
            <Text sx={{ fontWeight: "bold" }}>
              {boxChat.user_box_chat.name}
            </Text>

            <Row sx={{ alignItems: "center" }}>
              <Text
                fontSize="caption"
                sx={{
                  maxWidth: "55%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {boxChat.last_mess.content}
              </Text>
              <UiIcon icon="bi:dot" />
              <UiToolTip
                title={formatDate(boxChat.last_mess.create_at)}
                placement="top"
              >
                <div>
                  <Text fontSize="caption">
                    {timeAgo(boxChat.last_mess.create_at)}
                  </Text>
                </div>
              </UiToolTip>
            </Row>
          </Col>
        </Row>
        <Col
          sx={{
            alignItems: "flex-end",
            position: "absolute",
            top: "30%",
            right: "0px",
          }}
        >
          {boxChat.unread_messages > 0 && (
            <Row
              sx={{
                height: "20px",
                width: "20px",
                backgroundColor: COLOR.icon.primary,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
              }}
            >
              <Text fontSize="caption">{boxChat.unread_messages}</Text>
            </Row>
          )}
        </Col>
      </Row>
      <Divider />
    </Col>
  );
};

const ListBoxChat = ({
  listBoxChat,
  handleChooseBoxChat,
  forceRerender,
}: Props) => {
  return (
    <Col
      sx={{ alginItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Col
        sx={{
          height: "95vh",
          backgroundColor: "background.paper",
          borderRadius: "24px",
        }}
      >
        <Col sx={{ padding: "0px 20px" }}>
          <Row sx={{ alignItems: "center", marginTop: "20px" }}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#44b700",
                  color: "#44b700",
                },
              }}
            >
              <Avatar />
            </StyledBadge>
            <Text sx={{ marginLeft: "10px", fontWeight: "bold" }}>
              John Doe
            </Text>
          </Row>
          <Row>
            <FormControl
              sx={{
                width: "90%",
                marginTop: "20px",
                "& label.Mui-focused": {
                  color: "button.primary",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "button.primary",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                  fontSize: "16px",
                  paddingLeft: "5px",
                  "& fieldset": {
                    borderColor: "button.primary",
                  },
                  "&:hover fieldset": {
                    borderColor: "button.primary",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "button.primary",
                  },
                },
              }}
              variant="outlined"
            >
              <OutlinedInput
                sx={{
                  borderRadius: "12px",
                  height: "3em",
                  fontSize: "1rem",
                  backgroundColor: "transparent",

                  input: {
                    paddingLeft: "12px",
                    "&::placeholder": {
                      fontSize: "14px",
                    },
                  },
                }}
                id="outlined-adornment-weight"
                startAdornment={
                  <InputAdornment position="end">
                    <UiIcon icon="ant-design:search-outlined" />
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                placeholder="Search"
              />
            </FormControl>
          </Row>
        </Col>

        <Col
          sx={{
            marginTop: "30px",
            height: "85%",
          }}
        >
          <UiScrollBar>
            <Col sx={{ padding: "0px 20px" }}>
              {listBoxChat?.data?.map((boxChat: BoxChatApiItem) => {
                console.log("boxChat:", boxChat.box_chat.box_chat.id);
                const avatar = `http://127.0.0.1:8000${boxChat.user_box_chat.avatar}`;
                return (
                  <BoxChat
                    avatar={avatar}
                    boxChat={boxChat}
                    handleChooseBoxChat={handleChooseBoxChat}
                    forceRerender={forceRerender}
                  />
                );
              })}
            </Col>
          </UiScrollBar>
        </Col>
      </Col>
    </Col>
  );
};

export default ListBoxChat;
