import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import authApi from "../../api/authApi";
import { CategoryApiItem, RoleApiItem } from "../../types/models/auth";
import { ResponseApi } from "../../types/models/common";
import {
  fetchCategory,
  fetchCategorySuccess,
  fetchRegister,
  fetchRequestRegisterFailure,
  fetchRequestRegisterSuccess,
  fetchRole,
  fetchRoleSuccess,
} from "./authSlice";

function* userRegister(action: PayloadAction<any>) {
  const { response, error } = yield call(authApi.register, action.payload);

  if (response) {
    yield put(fetchRequestRegisterSuccess(response));
  } else {
    yield put(fetchRequestRegisterFailure(error));
  }
}

function* getRole() {
  const responsive: ResponseApi<RoleApiItem[]> = yield call(authApi.getRole);
  yield put(fetchRoleSuccess(responsive));
}

function* getCategory() {
  const responsive: ResponseApi<CategoryApiItem[]> = yield call(
    authApi.getCategory
  );
  yield put(fetchCategorySuccess(responsive));
}

export default function* authSaga() {
  yield takeLatest(fetchRegister.type, userRegister);
  yield takeLatest(fetchRole.type, getRole);
  yield takeLatest(fetchCategory.type, getCategory);
}
