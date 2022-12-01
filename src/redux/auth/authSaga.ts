import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import authApi from "../../api/authApi";
import {
  CategoryApiItem,
  FindAccountApiItem,
  LoginApiItem,
  LoginProps,
  OTPApiItem,
  ResetPasswordApiItem,
  RoleApiItem,
} from "../../types/models/auth";
import { ResponseApi } from "../../types/models/common";
import {
  fetchAccuracyOTP,
  fetchCategory,
  fetchCategorySuccess,
  fetchGmailAuth,
  fetchLogin,
  fetchLoginDone,
  fetchLoginFailed,
  fetchRegister,
  fetchRequestAuthFailure,
  fetchRequestAuthSuccess,
  fetchResetPassword,
  fetchRole,
  fetchRoleSuccess,
  setTokenUser,
} from "./authSlice";

function* userRegister(action: PayloadAction<any>) {
  const { response, error } = yield call(authApi.register, action.payload);

  if (response) {
    yield put(fetchRequestAuthSuccess(response));
  } else {
    yield put(fetchRequestAuthFailure(error));
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
  console.log("re:", responsive);
  yield put(fetchCategorySuccess(responsive));
}

function* gmailAuthentication(action: PayloadAction<FindAccountApiItem>) {
  const { response, error } = yield call(
    authApi.gmailAuthentication,
    action.payload
  );
  if (response) {
    yield put(fetchRequestAuthSuccess(response));
  } else {
    yield put(fetchRequestAuthFailure(error));
  }
}

function* accuracyOTP(action: PayloadAction<OTPApiItem>) {
  const { response, error } = yield call(authApi.accuracyOTP, action.payload);
  if (response) {
    yield put(fetchRequestAuthSuccess(response));
  } else {
    yield put(fetchRequestAuthFailure(error));
  }
}

function* resetPassword(action: PayloadAction<ResetPasswordApiItem>) {
  const { response, error } = yield call(authApi.resetPassword, action.payload);
  if (response) {
    yield put(fetchRequestAuthSuccess(response));
  } else {
    yield put(fetchRequestAuthFailure(error));
  }
}

function* userLogin(action: PayloadAction<LoginProps>) {
  try {
    const responsive: ResponseApi<LoginApiItem> = yield call(
      authApi.login,
      action.payload
    );
    yield put(setTokenUser(responsive));
  } catch (error) {
    yield put(fetchLoginFailed());
  } finally {
    yield put(fetchLoginDone());
  }
}

export default function* authSaga() {
  yield takeLatest(fetchRegister.type, userRegister);
  yield takeLatest(fetchRole.type, getRole);
  yield takeLatest(fetchCategory.type, getCategory);
  yield takeLatest(fetchGmailAuth.type, gmailAuthentication);
  yield takeLatest(fetchAccuracyOTP.type, accuracyOTP);
  yield takeLatest(fetchResetPassword.type, resetPassword);
  yield takeLatest(fetchLogin.type, userLogin);
}
