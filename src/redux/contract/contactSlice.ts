import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  PaginationResponse,
  ResponseApi,
  ResponseDataApi,
} from "../../types/models/common";
import { ContractApiItems } from "../../types/models/contract";

export interface projectState {
  loading: boolean;
  listCooperationInvitation: ContractApiItems[];
  contract?: ContractApiItems;
}

const initialState: projectState = {
  loading: false,
  listCooperationInvitation: [],
  contract: undefined,
};

const contractSlice = createSlice({
  name: "contract",
  initialState: initialState,
  reducers: {
    //Startup
    fetchCreateContract(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchCreateContractSuccess(state, action: PayloadAction<any>) {
      console.log("Successfully fetched:", action.payload);
    },
    //Investor
    fetchCooperationInvitation(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchCooperationSuccessInvitation(
      state,
      action: PayloadAction<PaginationResponse<ContractApiItems>>
    ) {
      state.listCooperationInvitation = action.payload.response.data.results;
    },
    //Fetch Contract Detail
    fetchContractDetail(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchContractDetailSuccess(
      state,
      action: PayloadAction<ResponseDataApi<ContractApiItems>>
    ) {
      state.loading = true;
      state.contract = action.payload.response.data[0];
    },
    //Handle contract decision
    fetchContractDecision(state, action: PayloadAction<any>) {
      state.loading = true;
    },
  },
});

//Actions
export const {
  fetchCreateContract,
  fetchCreateContractSuccess,
  fetchCooperationInvitation,
  fetchCooperationSuccessInvitation,
  fetchContractDetail,
  fetchContractDetailSuccess,
  fetchContractDecision,
} = contractSlice.actions;
//Selectors
export const selectListCooperationInvitation = (state: RootState) =>
  state.contract.listCooperationInvitation;
export const selectContractDetail = (state: RootState) =>
  state.contract.contract;

//Reducer
const contractReducer = contractSlice.reducer;
export default contractReducer;
