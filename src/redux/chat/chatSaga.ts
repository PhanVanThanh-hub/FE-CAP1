import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import chatApi from "../../api/chatApi";
import { ListBoxChatApiItem, MessageApiItem } from "../../types/models/chat";
import { ListResponseFilter, ResponseApi } from "../../types/models/common";
import {
  fetchBoxChat,
  fetchBoxChatSuccess,
  fetchChat,
  fetchChatSuccess,
} from "./chatSlice";

function* getBoxChat() {
  const responsive: ResponseApi<ListBoxChatApiItem> = yield call(
    chatApi.getBoxChat
  );

  yield put(fetchBoxChatSuccess(responsive));
}

function* getChat(action: PayloadAction<ListResponseFilter<MessageApiItem>>) {
  const responsive: ResponseApi<any> = yield call(
    chatApi.getMess,
    action.payload
  );

  yield put(fetchChatSuccess(responsive));
}

export default function* chatSaga() {
  yield takeLatest(fetchBoxChat.type, getBoxChat);
  yield takeLatest(fetchChat.type, getChat);
}
