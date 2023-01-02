import React from "react";
import { Avatar, CardMedia, Divider } from "@mui/material";
import { Col, Row, Text, UiIcon } from "../../../components/elements";
import UiScrollBar from "../../../components/elements/UiScrollBar";
import { BoxChatApiItem, ListBoxChatApiItem } from "../../../types/models/chat";
import { timeAgo } from "../../../until/helpers";
import { ProfileApiItem } from "../../../types/models/auth";
import useWebSocket from "react-use-websocket";
import { getUsernameFromStorage } from "../../../services/auth";
import logo from "../../../assets/image/logo.png";
import { useHistory } from "react-router-dom";

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
        <Row sx={{ width: "100%" }}>
          <Avatar
            alt=""
            src={avatar}
            style={{ height: "60px", width: "60px" }}
          />
          <Col
            sx={{
              marginLeft: "15px",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Row
              sx={{
                justifyContent: "space-between",
              }}
            >
              <Text sx={{ fontWeight: "bold" }}>
                {boxChat.user_box_chat.name}
              </Text>
              <Row sx={{ alignItems: "center" }}>
                <UiIcon icon="bi:dot" />
                <Text fontSize="caption">
                  {timeAgo(boxChat.last_mess.create_at)}
                </Text>
              </Row>
            </Row>

            <Text
              fontSize="caption"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {boxChat.last_mess.content}
            </Text>
          </Col>
        </Row>
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
  const history = useHistory();

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
        <Col sx={{ alignItems: "center" }}>
          <CardMedia
            component="img"
            image={logo}
            alt="Paella dish"
            style={{ width: "30%", paddingTop: "20px", cursor: "pointer" }}
            onClick={() => history.push("/")}
          />
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
