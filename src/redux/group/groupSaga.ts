import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import groupApi from "../../api/groupApi";
import { PaginationResponse } from "../../types/models/common";
import { GroupUserApiItem } from "../../types/models/groups";
import {
  fetchAdminGroup,
  fetchAdminGroupSuccess,
  fetchGroupDetail,
  fetchGroupDetailSuccess,
  fetchMemberGroup,
  fetchMemberGroupSuccess,
  fetchMyGroups,
  fetchMyGroupsSuccess,
} from "./groupSlice";

function* getMyGroups(action: PayloadAction<any>) {
  const responsive: PaginationResponse<GroupUserApiItem> = yield call(
    groupApi.getMyGroups,
    action.payload
  );
  yield put(fetchMyGroupsSuccess(responsive));
}

function* getGroupDetail(action: PayloadAction<any>) {
  const { response, error } = yield call(
    groupApi.getGroupDetail,
    action.payload
  );
  yield put(fetchGroupDetailSuccess(response));
}

function* getMemberGroup(action: PayloadAction<any>) {
  const response: PaginationResponse<GroupUserApiItem> = yield call(
    groupApi.getMemberGroup,
    action.payload
  );
  yield put(fetchMemberGroupSuccess(response));
}

function* getAdminGroup(action: PayloadAction<any>) {
  const response: PaginationResponse<GroupUserApiItem> = yield call(
    groupApi.getMemberGroup,
    action.payload
  );
  yield put(fetchAdminGroupSuccess(response));
}

export default function* groupsSaga() {
  yield takeLatest(fetchMyGroups.type, getMyGroups);
  yield takeLatest(fetchGroupDetail.type, getGroupDetail);
  yield takeLatest(fetchMemberGroup.type, getMemberGroup);
  yield takeLatest(fetchAdminGroup.type, getAdminGroup);
}
