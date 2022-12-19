import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import projectApi from "../../api/projectApi";
import { PaginationResponse, ResponseApi } from "../../types/models/common";
import {
  ProjectApiItem,
  ProjectDetailApiItem,
} from "../../types/models/projects";
import { fetchData, fetchFailed, fetchSuccess } from "../uiSlice";
import {
  fetchAddMemberProject,
  fetchCreateProject,
  fetchCreateProjectSuccess,
  fetchMember,
  fetchProjects,
  fetchProjectsStartup,
  fetchProjectsSuccess,
  fetchProjectByID,
  fetchProjectByIDSuccess,
} from "./projectSlice";

function* getProject(action: PayloadAction<any>) {
  const responsive: PaginationResponse<ProjectApiItem> = yield call(
    projectApi.getProjects,
    action.payload
  );
  yield put(fetchProjectsSuccess(responsive));
}

function* getProjectByID(action: PayloadAction<any>) {
  const responsive: ResponseApi<ProjectDetailApiItem[]> = yield call(
    projectApi.getProjectDetail,
    action.payload
  );
  yield put(fetchProjectByIDSuccess(responsive));
}

function* getMember(action: PayloadAction<any>) {
  const responsive: PaginationResponse<ProjectApiItem> = yield call(
    projectApi.getMember,
    action.payload
  );
  console.log("responsive:", responsive);
}

function* getProjectsStartup(action: PayloadAction<any>) {
  const responsive: PaginationResponse<ProjectApiItem> = yield call(
    projectApi.getProjectsStartup,
    action.payload
  );
  yield put(fetchProjectsSuccess(responsive));
}

function* createProject(action: PayloadAction<any>) {
  yield put(fetchData());
  const { response, error } = yield call(
    projectApi.createProjectsStartup,
    action.payload
  );

  if (response) {
    yield put(fetchCreateProjectSuccess(response));
  } else {
    yield put(fetchFailed(error));
  }
}

function* addMemberProject(action: PayloadAction<any>) {
  const { response, error } = yield call(
    projectApi.addMemberProject,
    action.payload
  );
  if (response) {
    yield put(fetchSuccess(response));
  } else {
    yield put(fetchFailed(error));
  }
}

export default function* projectSaga() {
  yield takeLatest(fetchProjects.type, getProject);
  yield takeLatest(fetchProjectsStartup.type, getProjectsStartup);
  yield takeLatest(fetchCreateProject.type, createProject);
  yield takeLatest(fetchAddMemberProject.type, addMemberProject);
  yield takeLatest(fetchMember.type, getMember);
  yield takeLatest(fetchProjectByID.type, getProjectByID);
}
