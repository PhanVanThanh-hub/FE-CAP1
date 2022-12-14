import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ErrorResponse, SuccessResponse } from "../types/models/common";
import { getObjNthItem } from "../until/helpers/functions";

export interface uiState {
  loading: boolean;
  isLoginStatus: boolean;
  isLogin: boolean;
  mess: string;
  status: number;
  finishedCallApi: boolean;
  title: string;
}

const initialState: uiState = {
  loading: false,
  isLoginStatus: false,
  isLogin: false,
  mess: "",
  status: 0,
  title: "",
  finishedCallApi: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
      state.finishedCallApi = false;
    },
    fetchFailed(state, action: PayloadAction<ErrorResponse>) {
      const mess = getObjNthItem(action.payload.response.data, 1);
      state.mess = mess[0];
      state.status = action.payload.response.status;
      state.loading = false;
      state.finishedCallApi = true;
    },
    fetchSuccess(state, action: PayloadAction<SuccessResponse>) {
      state.loading = false;
      state.title = getObjNthItem(action.payload.data, 1);
      state.mess = getObjNthItem(action.payload.data, 2);
      state.status = action.payload.status;
      state.finishedCallApi = true;
    },
    fetchProjectSuccess(state) {
      state.loading = false;
      state.mess = "Create Project Success";
      state.status = 200;
      state.finishedCallApi = true;
    },
  },
});

//Actions
export const { fetchData, fetchFailed, fetchSuccess, fetchProjectSuccess } =
  uiSlice.actions;
//Selectors
export const selectLoading = (state: RootState) => state.ui.loading;
export const selectMess = (state: RootState) => state.ui.mess;
export const selectStatus = (state: RootState) => state.ui.status;
export const selectFinishedCallApi = (state: RootState) =>
  state.ui.finishedCallApi;
export const selectTitle = (state: RootState) => state.ui.title;
//Reducer
const uiReducer = uiSlice.reducer;
export default uiReducer;
