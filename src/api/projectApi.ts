import { getAccessTokenFromStorage } from "../services/auth";
import { ErrorResponse, SuccessResponse } from "../types/models/common";
import axiosClient from "./axiosClient";

const projectApi = {
  getProjects(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "projects/";
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
  getProjectDetail(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "project/";
    return axiosClient.get(url, {
      params: {
        ...params,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  getProjectsStartup(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "projects_startup/";
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
  createProjectsStartup(data: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "projects_startup/";
    return axiosClient
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
  addMemberProject(data: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "member_project/";
    return axiosClient
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: SuccessResponse) => ({ response }))
      .catch((error: ErrorResponse) => ({ error }));
  },
  getMember(params: any) {
    const accessToken = getAccessTokenFromStorage();
    const url = "member/";
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

export default projectApi;
