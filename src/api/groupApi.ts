import { getAccessTokenFromStorage } from "../services/auth";
import { ErrorResponse, SuccessResponse } from "../types/models/common";
import axiosClient from "./axiosClient";

const groupApi = {
  getMyGroups(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "my_group/";
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
  getGroupDetail(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "group/";
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
  getMemberGroup(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "member_group/";
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

export default groupApi;
