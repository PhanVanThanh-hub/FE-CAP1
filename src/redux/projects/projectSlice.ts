import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  ListResponse,
  ListResponseFilter,
  PaginationResponse,
  PostErrorResponse,
  PostSuccessResponse,
  ResponseApi,
} from "../../types/models/common";
import { ProjectApiItem } from "../../types/models/projects";
import { getObjNthItem } from "../../until/helpers/functions";

export interface projectState {
  loading: boolean;
  isLoginStatus: boolean;
  isLogin: boolean;
  projectsStartup: ProjectApiItem[];
  projectID: string;
  mess: string;
  status: number;
}

const initialState: projectState = {
  loading: false,
  isLoginStatus: false,
  isLogin: false,
  projectsStartup: [],
  projectID: "",
  mess: "",
  status: 0,
};

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    //All Project
    fetchProjects(state) {
      state.loading = true;
    },
    fetchRequestAuthSuccess(state, action: PayloadAction<PostSuccessResponse>) {
      state.loading = false;
    },
    fetchRequestAuthFailure(state, action: PayloadAction<PostErrorResponse>) {
      state.loading = false;
    },
    //Project Startup
    fetchProjectsStartup(state) {
      state.loading = false;
    },

    fetchProjectsStartupSuccess(
      state,
      action: PayloadAction<PaginationResponse<ProjectApiItem>>
    ) {
      state.projectsStartup = action.payload.response.data.results;
    },
    fetchCreateProject(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchAddMemberProject(state, action: PayloadAction<any>) {},
    fetchCreateProjectSuccess(state, action: PayloadAction<any>) {
      state.projectID = action.payload.data.data;
    },
  },
});

//Actions
export const {
  fetchProjects,
  fetchRequestAuthSuccess,
  fetchRequestAuthFailure,
  fetchProjectsStartup,
  fetchProjectsStartupSuccess,
  fetchCreateProject,
  fetchAddMemberProject,
  fetchCreateProjectSuccess,
} = projectSlice.actions;
//Selectors
export const selectRole = (state: RootState) => state.auth.role;
export const selectProjectsStartup = (state: RootState) =>
  state.projects.projectsStartup;
export const selectProjectID = (state: RootState) => state.projects.projectID;
export const selectLoadingProject = (state: RootState) =>
  state.projects.loading;
//Reducer
const projectReducer = projectSlice.reducer;
export default projectReducer;
