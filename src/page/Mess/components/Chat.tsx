import React, { useEffect, useState } from "react";
import { Avatar, Divider, FormControl, OutlinedInput } from "@mui/material";
import {
  Col,
  Row,
  Text,
  UiButton,
  UiIcon,
  UiToolTip,
} from "../../../components/elements";
import UiScrollBar from "../../../components/elements/UiScrollBar";
import useWebSocket from "react-use-websocket";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchChat,
  selectContentBoxChat,
  selectNextMess,
} from "../../../redux/chat/chatSlice";
import { ProfileApiItem } from "../../../types/models/auth";
import { MessageApiItem } from "../../../types/models/chat";
import {
  formatDateDetail,
  formatShortDateTime,
  timeAgo,
} from "../../../until/helpers";
import { getUsernameFromStorage } from "../../../services/auth";
import moment from "moment";
import { ParamsProps } from "../../../types/models/app";
import { useParams } from "react-router-dom";

interface Props {
  setBoolBag: (item: { [key: string]: boolean }) => void;
  openInformation: boolean;
  userBoxChat?: ProfileApiItem;
}

interface NewMessProps {
  message: string;
  user: number;
  status: boolean;
  create_at: string;
}

interface MessageProps {
  mess: MessageApiItem;
  avatar: string;
  userBoxChat?: ProfileApiItem;
}

const Message = ({ mess, avatar, userBoxChat }: MessageProps) => {
  const isUser = userBoxChat?.user.id === mess.user;
  return (
    <Row
      sx={{
        justifyContent: isUser ? "flex-start" : "flex-end",
        padding: "0px 30px",
      }}
    >
      <Row sx={{ alignItems: "end", margin: "5px 0px", maxWidth: "40%" }}>
        {isUser && <Avatar src={avatar} sx={{ marginRight: "10px" }} />}
        <Col
          sx={{
            backgroundColor: "background.default",
            padding: "10px 20px ",
            borderRadius: "12px",
          }}
        >
          <Text>{mess.content}</Text>
          <UiToolTip
            title={formatDateDetail(mess.create_at)}
            placeholder="right"
          >
            <div>
              <Text
                fontSize="caption"
                sx={{
                  width: "100%",
                  textAlign: isUser ? "start" : "end",
                  marginTop: "10px",
                }}
              >
                {timeAgo(mess.create_at)}
              </Text>
            </div>
          </UiToolTip>
        </Col>
        {!mess.status && !isUser && (
          <Row
            sx={{
              backgroundColor: "white",
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "2px",
            }}
          >
            <UiIcon icon="charm:tick" size="12" />
          </Row>
        )}
      </Row>
    </Row>
  );
};

const NewMessage = ({
  mess,
  userBoxChat,
  avatar,
}: {
  mess: NewMessProps;
  userBoxChat?: ProfileApiItem;
  avatar: string;
}) => {
  const isUser = userBoxChat?.user.id === mess.user;

  return (
    <Row
      sx={{
        justifyContent: isUser ? "flex-start" : "flex-end",
        padding: "0px 30px",
      }}
    >
      <Row sx={{ alignItems: "end", margin: "5px 0px", maxWidth: "40%" }}>
        {isUser && <Avatar src={avatar} sx={{ marginRight: "10px" }} />}
        <Col
          sx={{
            backgroundColor: "background.default",
            padding: "10px 20px ",
            borderRadius: "12px",
          }}
        >
          <Text>{mess.message}</Text>
          <UiToolTip
            title={formatShortDateTime(mess.create_at)}
            placeholder="right"
          >
            <div>
              <Text
                fontSize="caption"
                sx={{
                  width: "100%",
                  textAlign: isUser ? "start" : "end",
                  marginTop: "10px",
                }}
              >
                {timeAgo(mess.create_at)}
              </Text>
            </div>
          </UiToolTip>
        </Col>
        {!mess.status && !isUser && (
          <Row
            sx={{
              backgroundColor: "white",
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "2px",
            }}
          >
            <UiIcon icon="charm:tick" size="12" />
          </Row>
        )}
      </Row>
    </Row>
  );
};

const Chat = ({ setBoolBag, openInformation, userBoxChat }: Props) => {
  const dispatch = useAppDispatch();
  const params = useParams<ParamsProps>();
  const { id } = params;
  const username = getUsernameFromStorage();
  const isLearnMore = useAppSelector(selectNextMess);
  const listBoxChat: MessageApiItem[] = useAppSelector(selectContentBoxChat);
  const [mess, setMess] = useState<string>("");
  const [currentPage, setPage] = useState<number>(1);
  const [newMess, setNewMess] = useState<NewMessProps[]>([]);
  const [rerenderAt, forceRerender] = useState(Date.now());
  const roomName = `${id}user${username}`;
  const avatar = `http://127.0.0.1:8000${userBoxChat?.avatar}`;
  const socketUrl = `ws://127.0.0.1:8000/ws/chat/${roomName}/`;
  console.log("reRender:");

  const { sendJsonMessage, getWebSocket } = useWebSocket(socketUrl, {
    onOpen: () => console.log("WebSocket connection opened."),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event: WebSocketEventMap["message"]) => {
      const data = JSON.parse(event.data);
      const mess = {
        message: data["message"],
        user: data["user"],
        status: data["status"],
        create_at: moment().toString(),
      };
      setNewMess((prev) => [...prev, mess]);
    },
  });

  useEffect(() => {
    setPage(1);
    forceRerender(Date.now());
  }, [id]);

  useEffect(() => {
    const fetchContentChat = async () => {
      await dispatch(fetchChat({ box_chat: id, page: currentPage }));
    };
    fetchContentChat();
  }, [currentPage, dispatch, id, rerenderAt]);

  const handleSendMess = () => {
    if (mess) {
      sendJsonMessage({
        message: mess,
        box_chat: id,
        user: username,
      });
    }
    setMess("");
  };

  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      if (mess) {
        sendJsonMessage({
          message: mess,
          box_chat: id,
          user: username,
        });
      }
      setMess("");
    }
  };

  const handleLearnMoreMess = () => {
    setPage(currentPage + 1);
  };

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
        <Row
          sx={{
            marginTop: "20px",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 30px",
          }}
        >
          <Row sx={{ alignItems: "center" }}>
            <Avatar src={avatar} />
            <Col sx={{ marginLeft: "10px" }}>
              <Row>
                <Text fontWeight="bold">{userBoxChat?.name}</Text>
                {/* <UiIcon icon="ci:dot-02-s" color={COLOR.icon.onl} /> */}
              </Row>
              {/* <Text fontSize="caption">Last seen 2h ago</Text> */}
            </Col>
          </Row>
          <Row>
            <UiIcon
              icon="uiw:information"
              onClick={() => setBoolBag({ openInformation: !openInformation })}
            />
          </Row>
        </Row>
        <Divider sx={{ margin: "20px 0px" }} />
        <UiScrollBar>
          {isLearnMore && (
            <Row sx={{ alignItems: "center", justifyContent: "center" }}>
              <UiButton onClick={handleLearnMoreMess}>Learn More</UiButton>
            </Row>
          )}
          {listBoxChat &&
            listBoxChat
              .slice(0)
              .reverse()
              .map((mess: MessageApiItem) => {
                return (
                  <Message
                    key={mess.id}
                    mess={mess}
                    avatar={avatar}
                    userBoxChat={userBoxChat}
                  />
                );
              })}
          {newMess.map((mess, index) => {
            return (
              <NewMessage
                key={index}
                mess={mess}
                avatar={avatar}
                userBoxChat={userBoxChat}
              />
            );
          })}
        </UiScrollBar>
        <Row
          sx={{
            padding: "10px 30px",
            alignItems: "center",
          }}
        >
          <FormControl
            sx={{
              width: "90%",
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
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              placeholder="Type a message"
              value={mess}
              onChange={(e) => setMess(e.target.value)}
              onKeyDown={keyPress}
            />
          </FormControl>
          <Row sx={{ marginLeft: "50px" }}>
            <UiIcon icon="akar-icons:send" size="18" onClick={handleSendMess} />
          </Row>
        </Row>
      </Col>
    </Col>
  );
};

export default Chat;
