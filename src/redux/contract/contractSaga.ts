import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import contactApi from "../../api/contractApi";
import {
  PaginationResponse,
  ResponseApi,
  ResponseDataApi,
} from "../../types/models/common";
import { ContractApiItems } from "../../types/models/contract";
import { fetchData, fetchFailed, fetchSuccess } from "../uiSlice";
import {
  fetchContractDecision,
  fetchContractDetail,
  fetchContractDetailSuccess,
  fetchCooperationInvitation,
  fetchCooperationSuccessInvitation,
  fetchCreateContract,
} from "./contactSlice";

function* CreateContract(action: PayloadAction<any>) {
  const { response, error } = yield call(
    contactApi.createContract,
    action.payload
  );
  if (response) {
    yield put(fetchSuccess(response));
  } else {
    yield put(fetchFailed(error));
  }
}

function* getCooperationInvitation(action: PayloadAction<any>) {
  const responsive: PaginationResponse<ContractApiItems> = yield call(
    contactApi.getCooperationInvitation,
    action.payload
  );
  yield put(fetchCooperationSuccessInvitation(responsive));
}

function* getContractDetail(action: PayloadAction<any>) {
  const responsive: ResponseDataApi<ContractApiItems> = yield call(
    contactApi.getContractDetail,
    action.payload
  );
  yield put(fetchContractDetailSuccess(responsive));
}

function* ContractDecision(action: PayloadAction<any>) {
  const { response, error } = yield call(
    contactApi.ContractDecision,
    action.payload
  );
  if (response) {
    yield put(fetchSuccess(response));
  } else {
    yield put(fetchFailed(error));
  }
}

export default function* contactSaga() {
  yield takeLatest(fetchCreateContract.type, CreateContract);
  yield takeLatest(fetchCooperationInvitation.type, getCooperationInvitation);
  yield takeLatest(fetchContractDetail.type, getContractDetail);
  yield takeLatest(fetchContractDecision.type, ContractDecision);
}
