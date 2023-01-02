import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import chatApi from "../../api/chatApi";
import { ListBoxChatApiItem, MessageApiItem } from "../../types/models/chat";
import {
  ListResponseFilter,
  PaginationResponse,
  ResponseApi,
} from "../../types/models/common";
import { fetchFailed } from "../uiSlice";
import {
  fetchBoxChat,
  fetchBoxChatSuccess,
  fetchChat,
  fetchChatSuccess,
  fetchCheckBoxChat,
  fetchCheckBoxSuccess,
} from "./chatSlice";

function* getBoxChat() {
  const responsive: ResponseApi<ListBoxChatApiItem> = yield call(
    chatApi.getBoxChat
  );

  yield put(fetchBoxChatSuccess(responsive));
}

function* getChat(action: PayloadAction<ListResponseFilter<MessageApiItem>>) {
  const responsive: PaginationResponse<any> = yield call(
    chatApi.getMess,
    action.payload
  );

  yield put(fetchChatSuccess(responsive));
}

function* checkBoxChat(action: PayloadAction<any>) {
  const { response, error } = yield call(chatApi.checkBoxChat, action.payload);
  if (response) {
    yield put(fetchCheckBoxSuccess());
  } else {
    yield put(fetchFailed(error));
  }
}

export default function* chatSaga() {
  yield takeLatest(fetchBoxChat.type, getBoxChat);
  yield takeLatest(fetchChat.type, getChat);
  yield takeLatest(fetchCheckBoxChat.type, checkBoxChat);
}
