import { getAccessTokenFromStorage } from "../services/auth";
import { PostErrorResponse, PostSuccessResponse } from "../types/models/common";
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
      .then((response: PostSuccessResponse) => ({ response }))
      .catch((error: PostErrorResponse) => ({ error }));
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
      .then((response: PostSuccessResponse) => ({ response }))
      .catch((error: PostErrorResponse) => ({ error }));
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
      .then((response: PostSuccessResponse) => ({ response }))
      .catch((error: PostErrorResponse) => ({ error }));
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
      .then((response: PostSuccessResponse) => ({ response }))
      .catch((error: PostErrorResponse) => ({ error }));
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
      .then((response: PostSuccessResponse) => ({ response }))
      .catch((error: PostErrorResponse) => ({ error }));
  },
};

export default projectApi;
