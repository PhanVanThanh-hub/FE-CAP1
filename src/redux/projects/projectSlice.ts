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
  count: number;
  nextPage: string;
  previousPage: string;
}

const initialState: projectState = {
  loading: false,
  isLoginStatus: false,
  isLogin: false,
  projectsStartup: [],
  projectID: "",
  mess: "",
  status: 0,
  count: 0,
  nextPage: "",
  previousPage: "",
};

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    //All Project
    fetchProjects(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchRequestAuthSuccess(state, action: PayloadAction<PostSuccessResponse>) {
      state.loading = false;
    },
    fetchRequestAuthFailure(state, action: PayloadAction<PostErrorResponse>) {
      state.loading = false;
    },
    //Project Startup
    fetchProjectsStartup(state, action: PayloadAction<any>) {
      state.loading = false;
    },

    fetchProjectsSuccess(
      state,
      action: PayloadAction<PaginationResponse<ProjectApiItem>>
    ) {
      state.projectsStartup = action.payload.response.data.results;
      state.count = action.payload.response.data.count;
      state.nextPage = action.payload.response.data.next;
      state.previousPage = action.payload.response.data.previous;
    },
    fetchCreateProject(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchAddMemberProject(state, action: PayloadAction<any>) {},
    fetchCreateProjectSuccess(state, action: PayloadAction<any>) {
      state.projectID = action.payload.data.data;
    },
    //Member
    fetchMember(state, action: PayloadAction<any>) {},
  },
});

//Actions
export const {
  fetchProjects,
  fetchRequestAuthSuccess,
  fetchRequestAuthFailure,
  fetchProjectsStartup,
  fetchProjectsSuccess,
  fetchCreateProject,
  fetchAddMemberProject,
  fetchCreateProjectSuccess,
  fetchMember,
} = projectSlice.actions;
//Selectors
export const selectRole = (state: RootState) => state.auth.role;
export const selectProjectsStartup = (state: RootState) =>
  state.projects.projectsStartup;
export const selectProjectID = (state: RootState) => state.projects.projectID;
export const selectLoadingProject = (state: RootState) =>
  state.projects.loading;
export const selectCountProjectsPagination = (state: RootState) =>
  state.projects.count;
export const selectNextPage = (state: RootState) => state.projects.nextPage;
export const selectPreviousPage = (state: RootState) =>
  state.projects.previousPage;
//Reducer
const projectReducer = projectSlice.reducer;
export default projectReducer;
