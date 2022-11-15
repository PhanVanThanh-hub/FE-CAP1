import { all } from "redux-saga/effects";
import authSaga from "../redux/auth/authSaga";
import chatSaga from "../redux/chat/chatSaga";

export default function* rootSaga() {
  yield all([authSaga(), chatSaga()]);
}
