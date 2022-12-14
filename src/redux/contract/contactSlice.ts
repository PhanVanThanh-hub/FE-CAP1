import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PaginationResponse, ResponseDataApi } from "../../types/models/common";
import {
  ContractApiItems,
  InvestorStatisticApiItems,
} from "../../types/models/contract";

export interface projectState {
  loading: boolean;
  listCooperationInvitation: ContractApiItems[];
  contract?: ContractApiItems;
  count: number;
  historyContracts: ContractApiItems[];
  countHistoryContract: number;
  investorStatistic?: InvestorStatisticApiItems;
}

const initialState: projectState = {
  loading: false,
  listCooperationInvitation: [],
  contract: undefined,
  count: 0,
  historyContracts: [],
  countHistoryContract: 0,
  investorStatistic: undefined,
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
      state.count = action.payload.response.data.count;
    },
    //Fetch Contract Detail
    fetchHistoryContract(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchHistoryContractSuccess(
      state,
      action: PayloadAction<PaginationResponse<ContractApiItems>>
    ) {
      state.countHistoryContract = action.payload.response.data.count;
      state.historyContracts = action.payload.response.data.results;
    },
    fetchContractDetail(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchContractDetailSuccess(
      state,
      action: PayloadAction<ResponseDataApi<ContractApiItems[]>>
    ) {
      state.loading = true;
      state.contract = action.payload.response.data[0];
    },
    //Handle contract decision
    fetchContractDecision(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    //Investor statistics
    fetchInvestorStatistics(state) {
      state.loading = true;
    },
    fetchInvestorStatisticsSuccess(
      state,
      action: PayloadAction<ResponseDataApi<InvestorStatisticApiItems>>
    ) {
      state.investorStatistic = action.payload.response.data;
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
  fetchHistoryContract,
  fetchHistoryContractSuccess,
  fetchInvestorStatistics,
  fetchInvestorStatisticsSuccess,
} = contractSlice.actions;
//Selectors
export const selectListCooperationInvitation = (state: RootState) =>
  state.contract.listCooperationInvitation;
export const selectContractDetail = (state: RootState) =>
  state.contract.contract;
export const selectCountContract = (state: RootState) => state.contract.count;
export const selectCountHistoryContract = (state: RootState) =>
  state.contract.countHistoryContract;
export const selectHistoryContract = (state: RootState) =>
  state.contract.historyContracts;
export const selectInvestorStatistics = (state: RootState) =>
  state.contract.investorStatistic;

//Reducer
const contractReducer = contractSlice.reducer;
export default contractReducer;
