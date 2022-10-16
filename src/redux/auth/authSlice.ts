import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CategoryApiItem, RoleApiItem } from "../../types/models/auth";
import {
  PostErrorResponse,
  PostSuccessResponse,
  ResponseApi,
} from "../../types/models/common";
import { getObjNthItem } from "../../until/helpers/functions";

export interface AuthState {}

export interface AuthState {
  role: any;
  category: any;
  loading: boolean;
  mess: string;
  status: number;
}

const initialState: AuthState = {
  role: "",
  category: "",
  loading: false,
  mess: "",
  status: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //register
    fetchRegister(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchRequestRegisterSuccess(
      state,
      action: PayloadAction<PostSuccessResponse>
    ) {
      console.log("success:", action.payload);
      state.loading = false;
      state.mess = getObjNthItem(action.payload.data, 1);
      state.status = action.payload.status;
      state.loading = false;
    },
    fetchRequestRegisterFailure(
      state,
      action: PayloadAction<PostErrorResponse>
    ) {
      console.log("failure:", action.payload);
      const mess = getObjNthItem(action.payload.response.data, 1);
      state.mess = mess[0];
      state.status = action.payload.response.status;
      state.loading = false;
    },
    resetFetchRegister(state) {
      state.mess = "";
      state.status = 0;
    },
    //role
    fetchRole(state) {},
    fetchRoleSuccess(state, action: PayloadAction<ResponseApi<RoleApiItem[]>>) {
      state.role = action.payload.data;
    },
    //category
    fetchCategory(state) {},
    fetchCategorySuccess(
      state,
      action: PayloadAction<ResponseApi<CategoryApiItem[]>>
    ) {
      state.category = action.payload.data;
    },
  },
});

//Actions
export const {
  fetchRegister,
  fetchRequestRegisterSuccess,
  fetchRequestRegisterFailure,
  fetchRole,
  fetchRoleSuccess,
  fetchCategory,
  fetchCategorySuccess,
  resetFetchRegister,
} = authSlice.actions;
//Selectors
export const selectRole = (state: RootState) => state.auth.role;
export const selectCategory = (state: RootState) => state.auth.category;
export const selectStatusRegister = (state: RootState) => state.auth.status;
export const selectMessRegister = (state: RootState) => state.auth.mess;
export const selectLoadingRegister = (state: RootState) => state.auth.loading;
//Reducer
const authReducer = authSlice.reducer;
export default authReducer;
