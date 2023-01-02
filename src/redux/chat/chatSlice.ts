import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ListBoxChatApiItem, MessageApiItem } from "../../types/models/chat";
import { PaginationResponse, ResponseApi } from "../../types/models/common";

export interface ChatState {
  list_box_chat: ListBoxChatApiItem;
  next: boolean;
  previous: boolean;
  isCheck: boolean;
}

const initialState: any = {
  list_box_chat: {},
  contentBoxChat: [],
  previous: false,
  next: false,
  isCheck: false,
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
      action: PayloadAction<PaginationResponse<MessageApiItem>>
    ) {
      state.next = !!action.payload.response.data.next;
      state.previous = !!action.payload.response.data.previous;
      if (!!action.payload.response.data.previous) {
        state.contentBoxChat.push(...action.payload.response.data.results);
      } else {
        state.contentBoxChat = action.payload.response.data.results;
      }
    },
    //checkbox chat
    fetchCheckBoxChat(state, action: PayloadAction<any>) {
      state.isCheck = false;
    },
    fetchCheckBoxSuccess(state) {
      state.isCheck = true;
    },
  },
});

//Actions
export const {
  fetchBoxChat,
  fetchBoxChatSuccess,
  fetchChat,
  fetchChatSuccess,
  fetchCheckBoxChat,
  fetchCheckBoxSuccess,
} = chatSlice.actions;
//Selectors
export const selectRole = (state: RootState) => state.auth.role;
export const selectListBoxChat = (state: RootState) => state.chat.list_box_chat;
export const selectContentBoxChat = (state: RootState) =>
  state.chat.contentBoxChat;
export const selectNextMess = (state: RootState) => state.chat.next;
export const selectPreviousMess = (state: RootState) => state.chat.previous;
export const selectCheckBoxChat = (state: RootState) => state.chat.isCheck;
//Reducer
const chatReducer = chatSlice.reducer;
export default chatReducer;
