import { toast } from "react-toastify";
import {
  loginUserRequest,
  registerRequest,
  getUserProfile,
  logoutUserProfile,
  updateUserProfile,
  updateUserPassword,
  resetPasswordRequest,
  forgotPasswordRequest,
} from "../config/requests";

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
  LOAD_USER_REQUEST,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "../constants/auth.constant";

// Login User
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await loginUserRequest(config, { email, password });

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message,
    });
    toast(`${error.response.data.message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 4000,
      type: "error",
    });
  }
};

// Register User
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await registerRequest(config, userData);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
    toast(`${error.response.data.message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 4000,
      type: "error",
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await getUserProfile();
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Logout User
export const logoutUser = () => async (dispatch) => {
  try {
    await logoutUserProfile();
    dispatch({ type: LOGOUT_USER_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Update User
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await updateUserProfile(config, userData);

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Update User Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await updateUserPassword(config, passwords);

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await forgotPasswordRequest(config, email);

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await resetPasswordRequest(config, passwords, token);

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Get All Users ---ADMIN
// export const getAllUsers = () => async (dispatch) => {
//   try {
//     dispatch({ type: ALL_USERS_REQUEST });
//     const { data } = await axios.get("/api/v1/admin/users");
//     dispatch({
//       type: ALL_USERS_SUCCESS,
//       payload: data.users,
//     });
//   } catch (error) {
//     dispatch({
//       type: ALL_USERS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Get User Details ---ADMIN
// export const getUserDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_DETAILS_REQUEST });
//     const { data } = await axios.get(`/api/v1/admin/user/${id}`);

//     dispatch({
//       type: USER_DETAILS_SUCCESS,
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: USER_DETAILS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Update User Details ---ADMIN
// export const updateUser = (id, userData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_USER_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await axios.put(
//       `/api/v1/admin/user/${id}`,
//       userData,
//       config
//     );

//     dispatch({
//       type: UPDATE_USER_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_USER_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Delete User ---ADMIN
// export const deleteUser = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_USER_REQUEST });
//     const { data } = await axios.delete(`/api/v1/admin/user/${id}`);

//     dispatch({
//       type: DELETE_USER_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_USER_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Clear All Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
