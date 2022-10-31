import {
  FindAccountApiItem,
  OTPApiItem,
  ResetPasswordApiItem,
} from "../types/models/auth";
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
  gmailAuthentication(data: FindAccountApiItem) {
    const url = "gmail_authentication/";
    return axiosClient
      .post(url, data)
      .then((response: PostSuccessResponse) => ({ response }))
      .catch((error: PostErrorResponse) => ({ error }));
  },
  accuracyOTP(data: OTPApiItem) {
    const url = "accuracy_otp/";
    return axiosClient
      .post(url, data)
      .then((response: PostSuccessResponse) => ({ response }))
      .catch((error: PostErrorResponse) => ({ error }));
  },
  resetPassword(data: ResetPasswordApiItem) {
    const url = "reset-password/";
    return axiosClient
      .post(url, data)
      .then((response: PostSuccessResponse) => ({ response }))
      .catch((error: PostErrorResponse) => ({ error }));
  },
  login(data: any) {
    const url = "/api/token/";
    return axiosClient.post(url, data);
  },
};

export default authApi;
