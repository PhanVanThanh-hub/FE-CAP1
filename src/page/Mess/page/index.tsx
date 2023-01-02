import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Col } from "../../../components/elements";
import { useBoolBag } from "../../../hooks";
import Chat from "../components/Chat";
import Information from "../components/Information";
import { fetchBoxChat, selectListBoxChat } from "../../../redux/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ListBoxChatApiItem } from "../../../types/models/chat";
import ListBoxChat from "../components/ListBoxChat";
import { ProfileApiItem } from "../../../types/models/auth";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";

const MessagePage = () => {
  const dispatch = useAppDispatch();
  const match = useRouteMatch();
  const history = useHistory();
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
    history.push(`/message/${box_chat_id}`);
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
          {boxChatAction && (
            <Switch>
              <Route path={`${match.url}/:id`} exact>
                <Chat
                  setBoolBag={setBoolBag}
                  openInformation={openInformation}
                  userBoxChat={userBoxChat}
                />
              </Route>
            </Switch>
          )}
        </Grid>
        {openInformation && userBoxChat && (
          <Grid item xs={3}>
            <Information userBoxChat={userBoxChat} />
          </Grid>
        )}
      </Grid>
    </Col>
  );
};

export default MessagePage;
