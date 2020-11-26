import axios from "axios";
// import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  //   USER_LOADED,
  //   AUTH_ERROR,
  //   LOGIN_SUCCESS,
  //   LOGIN_FAIL,
  //   LOGOUT,
  //   CLEAR_PROFILE,
} from "./types";

// LOAD user
// export const loadUser = () => async (dispatch) => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }

//   try {
//     const res = await axios.get("/api/auth");

//     dispatch({
//       type: USER_LOADED,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: AUTH_ERROR,
//     });
//   }
// };

// Register User
export const register = ({ first_name, last_name, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ first_name, last_name, email, password });

  try {
    const res = await axios.post("http://localhost:3000/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setAlert(error.response.data.errors, "danger"));
    console.log(error.response.data.errors);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// // Login User
// export const login = (email, password) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post("/api/auth", body, config);
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data,
//     });

//     dispatch(loadUser());
//   } catch (error) {
//     const errors = error.response.data.errors;
//     if (errors) {
//       errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
//     }
//     dispatch({
//       type: LOGIN_FAIL,
//     });
//   }
// };

// // LOGOUT
// export const logout = () => (dispatch) => {
//   dispatch({
//     type: CLEAR_PROFILE,
//   });
//   dispatch({
//     type: LOGOUT,
//   });
// };
