import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  ListResponseFilter,
  PaginationResponse,
  ErrorResponse,
  SuccessResponse,
  ResponseApi,
  ResponseDataApi,
} from "../../types/models/common";
import {
  InvestorProjectApiItem,
  ProjectApiItem,
  ProjectDetailApiItem,
} from "../../types/models/projects";

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
  project?: ProjectApiItem;
  projectDetail?: ProjectDetailApiItem;
  investorProject: InvestorProjectApiItem[];
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
  project: undefined,
  projectDetail: undefined,
  investorProject: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    //All Project
    fetchProjects(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchProjectByID(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchRequestAuthSuccess(state, action: PayloadAction<SuccessResponse>) {
      state.loading = false;
    },
    fetchRequestAuthFailure(state, action: PayloadAction<ErrorResponse>) {
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
    fetchProjectByIDSuccess(
      state,
      action: PayloadAction<ResponseApi<ProjectDetailApiItem[]>>
    ) {
      state.projectDetail = action.payload.data[0];
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
    //InvestorProject
    fetchInvestorProject(state, action: PayloadAction<any>) {},
    fetchInvestorProjectSuccess(
      state,
      action: PayloadAction<ResponseDataApi<InvestorProjectApiItem>>
    ) {
      console.log("payload:", action.payload.response.data);
      state.investorProject = action.payload.response.data;
    },
  },
});

//Actions
export const {
  fetchProjects,
  fetchProjectByID,
  fetchRequestAuthSuccess,
  fetchRequestAuthFailure,
  fetchProjectsStartup,
  fetchProjectsSuccess,
  fetchCreateProject,
  fetchAddMemberProject,
  fetchCreateProjectSuccess,
  fetchMember,
  fetchProjectByIDSuccess,
  fetchInvestorProject,
  fetchInvestorProjectSuccess,
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
export const selectProject = (state: RootState) => state.projects.project;
export const selectProjectDetail = (state: RootState) =>
  state.projects.projectDetail;
export const selectInvestorProject = (state: RootState) =>
  state.projects.investorProject;
//Reducer
const projectReducer = projectSlice.reducer;
export default projectReducer;
