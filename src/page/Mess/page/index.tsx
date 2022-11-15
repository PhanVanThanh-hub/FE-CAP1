import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Col } from "../../../components/elements";
import { useBoolBag } from "../../../hooks";
import Chat from "../components/Chat";
import Information from "../components/Information";
import {
  fetchBoxChat,
  fetchChat,
  selectListBoxChat,
} from "../../../redux/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ListBoxChatApiItem } from "../../../types/models/chat";
import ListBoxChat from "../components/ListBoxChat";
import { ProfileApiItem } from "../../../types/models/auth";

const MessagePage = () => {
  const dispatch = useAppDispatch();
  const { boolBag, setBoolBag } = useBoolBag({ openInformation: false });
  const [boxChatAction, setBoxChatAction] = useState<string>();
  const [userBoxChat, setUserBoxChat] = useState<ProfileApiItem>();
  const { openInformation } = boolBag;
  const [rerenderAt, forceRerender] = useState(Date.now());
  const listBoxChat: ListBoxChatApiItem = useAppSelector(selectListBoxChat);

  useEffect(() => {
    const getBoxChat = async () => {
      await dispatch(fetchBoxChat());
    };
    getBoxChat();
  }, [dispatch, rerenderAt]);

  const handleChooseBoxChat = (
    box_chat_id: string,
    user_box_chat: ProfileApiItem
  ) => {
    setBoxChatAction(box_chat_id);
    setUserBoxChat(user_box_chat);
  };

  return (
    <Col
      sx={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "background.default",
      }}
    >
      <Grid
        container
        columns={19}
        sx={{
          height: "100%",
          padding: "0px 20px",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={5} sx={{ height: "100%" }}>
          <ListBoxChat
            listBoxChat={listBoxChat}
            handleChooseBoxChat={handleChooseBoxChat}
            forceRerender={forceRerender}
          />
        </Grid>
        <Grid item xs={openInformation ? 10 : 13}>
          <Chat
            setBoolBag={setBoolBag}
            openInformation={openInformation}
            boxChatAction={boxChatAction}
            userBoxChat={userBoxChat}
          />
        </Grid>
        {openInformation && (
          <Grid item xs={3}>
            <Information />
          </Grid>
        )}
      </Grid>
    </Col>
  );
};

export default MessagePage;
