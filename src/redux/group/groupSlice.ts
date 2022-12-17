import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PaginationResponse } from "../../types/models/common";
import { GroupUserApiItem } from "../../types/models/groups";

export interface groupState {
  loading: boolean;
  myGroups: GroupUserApiItem[];
  group: any;
  memberGroup: GroupUserApiItem[];
  adminGroup: GroupUserApiItem[];
  countMemberGroup: number;
  countAdminGroup: number;
  isNextPage: boolean;
}

const initialState: groupState = {
  loading: false,
  myGroups: [],
  group: {},
  memberGroup: [],
  adminGroup: [],
  countMemberGroup: 0,
  countAdminGroup: 0,
  isNextPage: false,
};

const groupSlice = createSlice({
  name: "group",
  initialState: initialState,
  reducers: {
    //All Project
    fetchMyGroups(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchGroupDetail(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchMemberGroup(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchAdminGroup(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchMyGroupsSuccess(
      state,
      action: PayloadAction<PaginationResponse<GroupUserApiItem>>
    ) {
      state.myGroups = action.payload.response.data.results;
    },
    fetchGroupDetailSuccess(state, action: PayloadAction<any>) {
      state.group = action.payload.data[0];
    },
    fetchMemberGroupSuccess(
      state,
      action: PayloadAction<PaginationResponse<GroupUserApiItem>>
    ) {
      state.memberGroup.push(...action.payload.response.data.results);
      state.isNextPage = !!action.payload.response.data.next;
      state.countMemberGroup = action.payload.response.data.count;
    },
    fetchAdminGroupSuccess(
      state,
      action: PayloadAction<PaginationResponse<GroupUserApiItem>>
    ) {
      state.adminGroup = action.payload.response.data.results;
      state.countAdminGroup = action.payload.response.data.count;
    },
  },
});

//Actions
export const {
  fetchMyGroups,
  fetchGroupDetail,
  fetchMyGroupsSuccess,
  fetchGroupDetailSuccess,
  fetchMemberGroup,
  fetchMemberGroupSuccess,
  fetchAdminGroupSuccess,
  fetchAdminGroup,
} = groupSlice.actions;
//Selectors
export const selectMyGroups = (state: RootState) => state.groups.myGroups;
export const selectGroup = (state: RootState) => state.groups.group;
export const selectMemberGroup = (state: RootState) => state.groups.memberGroup;
export const selectCountMemberGroup = (state: RootState) =>
  state.groups.countMemberGroup;
export const selectAdminGroup = (state: RootState) => state.groups.adminGroup;
export const selectCountAdminGroup = (state: RootState) =>
  state.groups.countAdminGroup;
export const selectIsNextPageMember = (state: RootState) =>
  state.groups.isNextPage;

//Reducer
const groupReducer = groupSlice.reducer;
export default groupReducer;
