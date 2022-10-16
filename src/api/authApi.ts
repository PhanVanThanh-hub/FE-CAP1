import { PostErrorResponse, PostSuccessResponse } from "../types/models/common";
import axiosClient from "./axiosClient";

const authApi = {
  register(data: any) {
    const url = "register/";
    return axiosClient
      .post(url, data)
      .then((response: PostSuccessResponse) => ({ response }))
      .catch((error: PostErrorResponse) => ({ error }));
  },
  getRole() {
    const response = axiosClient.get("role/");
    return response;
  },
  getCategory() {
    const response = axiosClient.get("category/");
    return response;
  },
};

export default authApi;
