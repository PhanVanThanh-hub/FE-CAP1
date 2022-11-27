import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import projectApi from "../../api/projectApi";
import { PaginationResponse } from "../../types/models/common";
import { ProjectApiItem } from "../../types/models/projects";
import { fetchData, fetchFailed, fetchSuccess } from "../uiSlice";
import {
  fetchAddMemberProject,
  fetchCreateProject,
  fetchCreateProjectSuccess,
  fetchProjects,
  fetchProjectsStartup,
  fetchProjectsStartupSuccess,
} from "./projectSlice";

function* getProject() {
  yield call(projectApi.getProjects);
}

function* getProjectsStartup() {
  const responsive: PaginationResponse<ProjectApiItem> = yield call(
    projectApi.getProjectsStartup
  );
  yield put(fetchProjectsStartupSuccess(responsive));
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
}
