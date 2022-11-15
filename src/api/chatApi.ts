import { getAccessTokenFromStorage } from "../services/auth";
import { PostErrorResponse, PostSuccessResponse } from "../types/models/common";
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
    const response = await axiosClient.get("message/", {
      params: {
        ...params,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
    return {
      ...response,
    };
  },
};

export default chatApi;
