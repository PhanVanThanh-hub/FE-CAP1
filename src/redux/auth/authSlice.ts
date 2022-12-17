import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { saveUserCredential } from "../../services/auth";
import {
  CategoryApiItem,
  FindAccountApiItem,
  LoginApiItem,
  LoginProps,
  OTPApiItem,
  ResetPasswordApiItem,
  RoleApiItem,
} from "../../types/models/auth";
import {
  PaginationResponse,
  ErrorResponse,
  SuccessResponse,
  ResponseApi,
} from "../../types/models/common";
import { ProfileApiItem, UserApiItem } from "../../types/models/user";
import { getObjNthItem } from "../../until/helpers/functions";

export interface AuthState {}

export interface AuthState {
  role: any;
  category: any;
  loading: boolean;
  mess: string;
  status: number;
  finishedCallApi: boolean;
  email: string;
  otp: string;
  isLoginStatus: boolean;
  isLogin: boolean;
  userToken: string;
  listUser: ProfileApiItem[];
}

const initialState: AuthState = {
  role: "",
  category: "",
  loading: false,
  mess: "",
  status: 0,
  finishedCallApi: false,
  email: "",
  otp: "",
  isLoginStatus: false,
  isLogin: false,
  userToken: "",
  listUser: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //register
    fetchRegister(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchRequestAuthSuccess(state, action: PayloadAction<SuccessResponse>) {
      state.loading = false;
      state.mess = getObjNthItem(action.payload.data, 1);
      state.status = action.payload.status;
      state.loading = false;
      state.finishedCallApi = true;
    },
    fetchRequestAuthFailure(state, action: PayloadAction<ErrorResponse>) {
      const mess = getObjNthItem(action.payload.response.data, 1);
      state.mess = mess[0];
      state.status = action.payload.response.status;
      state.loading = false;
      state.finishedCallApi = true;
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
    //forgetPassword
    fetchGmailAuth(state, action: PayloadAction<FindAccountApiItem>) {
      state.loading = true;
      state.finishedCallApi = false;
      state.email = action.payload.email;
    },
    fetchAccuracyOTP(state, action: PayloadAction<OTPApiItem>) {
      state.loading = true;
      state.finishedCallApi = false;
      state.otp = action.payload.otp;
    },
    fetchResetPassword(state, action: PayloadAction<ResetPasswordApiItem>) {
      state.loading = true;
      state.finishedCallApi = false;
    },
    resetFetchForgotPassword(state) {
      state.finishedCallApi = false;
      state.mess = "";
      state.status = 0;
    },
    //login
    fetchLogin(state, action: PayloadAction<LoginProps>) {},
    fetchDataSuccess(state) {},
    fetchLoginFailed(state) {
      state.isLoginStatus = false;
    },
    setTokenUser(state, action: PayloadAction<ResponseApi<LoginApiItem>>) {
      const responsive = action.payload.data;
      const { access, refresh } = responsive;
      saveUserCredential({ access: access, refresh: refresh });
      state.isLogin = true;
      state.isLoginStatus = true;
      state.userToken = access;
    },
    setIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    setLoading(state) {
      state.loading = false;
    },
    fetchLoginDone(state) {
      state.loading = true;
    },
    //fetchSearch
    fetchSearch(state, action: PayloadAction<any>) {},
    fetchSearchSuccess(
      state,
      action: PayloadAction<PaginationResponse<ProfileApiItem>>
    ) {
      const responsive = action.payload.response.data.results;
      state.listUser = responsive;
    },
  },
});

//Actions
export const {
  fetchRegister,
  fetchRequestAuthSuccess,
  fetchRequestAuthFailure,
  fetchRole,
  fetchRoleSuccess,
  fetchCategory,
  fetchCategorySuccess,
  resetFetchRegister,
  fetchGmailAuth,
  fetchAccuracyOTP,
  fetchResetPassword,
  resetFetchForgotPassword,
  setTokenUser,
  setIsLogin,
  setLoading,
  fetchLogin,
  fetchLoginFailed,
  fetchLoginDone,
  fetchSearch,
  fetchSearchSuccess,
} = authSlice.actions;
//Selectors
export const selectRole = (state: RootState) => state.auth.role;
export const selectCategory = (state: RootState) => state.auth.category;
export const selectStatusAuth = (state: RootState) => state.auth.status;
export const selectMessAuth = (state: RootState) => state.auth.mess;
export const selectLoadingAuth = (state: RootState) => state.auth.loading;
export const selectFinishedCallApiAuth = (state: RootState) =>
  state.auth.finishedCallApi;
export const selectEmailForgot = (state: RootState) => state.auth.email;
export const selectOTP = (state: RootState) => state.auth.otp;
export const selectIsLogin = (state: RootState) => state.auth.isLogin;
export const selectIsLoginStatus = (state: RootState) =>
  state.auth.isLoginStatus;
export const selectIsLoading = (state: RootState) => state.auth.loading;
export const selectTokenUser = (state: RootState) => state.auth.userToken;
export const selectListUser = (state: RootState) => state.auth.listUser;
//Reducer
const authReducer = authSlice.reducer;
export default authReducer;
