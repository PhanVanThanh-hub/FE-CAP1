import { getAccessTokenFromStorage } from "../services/auth";
import { ErrorResponse, SuccessResponse } from "../types/models/common";
import axiosClient from "./axiosClient";

const contactApi = {
  createContract(data: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "contact/";
    return axiosClient
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
  getCooperationInvitation(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "contact/";
    var qs = require("qs");
    return axiosClient
      .get(url, {
        params: {
          ...params,
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
  getContractDetail(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "contract/";
    return axiosClient
      .get(url, {
        params: {
          ...params,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
  ContractDecision(data: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "contact/";
    return axiosClient
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
  getHistoryContract(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "history_contract/";
    var qs = require("qs");
    return axiosClient
      .get(url, {
        params: {
          ...params,
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
};

export default contactApi;
