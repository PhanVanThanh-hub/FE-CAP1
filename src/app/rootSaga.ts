import { all } from "redux-saga/effects";
import authSaga from "../redux/auth/authSaga";
import groupsSaga from "../redux/group/groupSaga";
import projectSaga from "../redux/projects/projectSaga";
import chatSaga from "../redux/chat/chatSaga";
import contractSaga from "../redux/contract/contractSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    projectSaga(),
    groupsSaga(),
    chatSaga(),
    contractSaga(),
  ]);
}
