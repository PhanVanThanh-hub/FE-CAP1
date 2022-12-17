import { all } from "redux-saga/effects";
import authSaga from "../redux/auth/authSaga";
import groupsSaga from "../redux/group/groupSaga";
import projectSaga from "../redux/projects/projectSaga";

export default function* rootSaga() {
  yield all([authSaga(), projectSaga(), groupsSaga()]);
}
