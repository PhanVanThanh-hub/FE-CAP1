import { getAccessTokenFromStorage } from "../services/auth";
import { ErrorResponse, SuccessResponse } from "../types/models/common";
import axiosClient from "./axiosClient";

const chatApi = {
  getBoxChat() {
    const accessToken = getAccessTokenFromStorage();
    const response = axiosClient.get(`/box_chat/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  },
  async getMess(params: any) {
    var qs = require("qs");
    const accessToken = getAccessTokenFromStorage();
    const response = await axiosClient
      .get("message/", {
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
    return {
      ...response,
    };
  },
  checkBoxChat(data: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "message/";
    return axiosClient
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
};

export default chatApi;
