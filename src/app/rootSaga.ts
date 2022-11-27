import { all } from "redux-saga/effects";
import authSaga from "../redux/auth/authSaga";
import projectSaga from "../redux/projects/projectSaga";

export default function* rootSaga() {
  yield all([authSaga(), projectSaga()]);
}
