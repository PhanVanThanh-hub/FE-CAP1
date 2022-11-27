import { getAccessTokenFromStorage } from "../services/auth";
import { PostErrorResponse, PostSuccessResponse } from "../types/models/common";
import axiosClient from "./axiosClient";

const projectApi = {
  getProjects() {
    const accessToken = getAccessTokenFromStorage();
    const url = "projects/";
    return axiosClient
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: PostSuccessResponse) => ({ response }))
      .catch((error: PostErrorResponse) => ({ error }));
  },
  getProjectsStartup() {
    const accessToken = getAccessTokenFromStorage();
    const url = "projects_startup/";
    return axiosClient
      .get(url, {
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
};

export default projectApi;
