import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  BoxChatApiItem,
  ListBoxChatApiItem,
  MessageApiItem,
} from "../../types/models/chat";
import { ListResponseFilter, ResponseApi } from "../../types/models/common";

export interface ChatState {
  list_box_chat: ListBoxChatApiItem;
}

const initialState: any = {
  list_box_chat: {},
  contentBoxChat: [],
};

const chatSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //ListBoxChat
    fetchBoxChat(state) {},
    fetchBoxChatSuccess(
      state,
      action: PayloadAction<ResponseApi<ListBoxChatApiItem>>
    ) {
      state.list_box_chat = action.payload.data;
    },
    //Chat
    fetchChat(state, action: PayloadAction<any>) {},
    fetchChatSuccess(
      state,
      action: PayloadAction<ListResponseFilter<MessageApiItem>>
    ) {
      state.contentBoxChat = action.payload.data.results;
    },
  },
});

//Actions
export const {
  fetchBoxChat,
  fetchBoxChatSuccess,
  fetchChat,
  fetchChatSuccess,
} = chatSlice.actions;
//Selectors
export const selectRole = (state: RootState) => state.auth.role;
export const selectListBoxChat = (state: RootState) => state.chat.list_box_chat;
export const selectContentBoxChat = (state: RootState) =>
  state.chat.contentBoxChat;
//Reducer
const chatReducer = chatSlice.reducer;
export default chatReducer;
