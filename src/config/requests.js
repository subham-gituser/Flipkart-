import axios from "./axios";
import { BASE_URL, USER_PATH } from "./http";

//auth APIs
export const getUserProfile = () => axios.get(`${BASE_URL}/${USER_PATH}/me`);

export const logoutUserProfile = () =>
  axios.get(`${BASE_URL}/${USER_PATH}/logout`);

export const registerRequest = (config, data) =>
  axios.post(`${BASE_URL}/${USER_PATH}/register`, data, config);

export const loginUserRequest = (config, data) =>
  axios.post(`${BASE_URL}/${USER_PATH}/login`, data, config);

export const forgotPasswordRequest = (config, data) =>
  axios.post(`${BASE_URL}/${USER_PATH}/password/forgot`, data, config);

export const resetPasswordRequest = (config, data, token) =>
  axios.put(`${BASE_URL}/${USER_PATH}/password/reset/${token}`, data, config);

export const updateUserProfile = () =>
  axios.put(`${BASE_URL}/${USER_PATH}/me/update`);

export const updateUserPassword = () =>
  axios.put(`${BASE_URL}/${USER_PATH}/password/update`);
