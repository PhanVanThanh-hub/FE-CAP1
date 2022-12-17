import { getAccessTokenFromStorage } from "../services/auth";
import {
  FindAccountApiItem,
  OTPApiItem,
  ResetPasswordApiItem,
} from "../types/models/auth";
import { ErrorResponse, SuccessResponse } from "../types/models/common";
import axiosClient from "./axiosClient";

const authApi = {
  register(data: any) {
    const url = "register/";
    return axiosClient
      .post(url, data)
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
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
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
  accuracyOTP(data: OTPApiItem) {
    const url = "accuracy_otp/";
    return axiosClient
      .post(url, data)
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
  resetPassword(data: ResetPasswordApiItem) {
    const url = "reset-password/";
    return axiosClient
      .post(url, data)
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
  login(data: any) {
    const url = "/api/token/";
    return axiosClient.post(url, data);
  },
  searchUser(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "search/";
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
};

export default authApi;
