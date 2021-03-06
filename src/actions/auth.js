import api from "../utils/api";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_MODEL,
  CLEAR_PLAYERS,
} from "./types";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get("http://parallelscore.xyz:5132/users/sign_up");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (email, password, fullname, phone) => async (
  dispatch
) => {
  try {
    // var url = "/users/login";
    const uid = uuidv4();
    var url = "/signup";
    var payload = {};
    let [first_name, last_name, ...rest] = fullname.split(" ");
    payload["email"] = email;
    payload["password"] = password;
    // payload["firstName"] = first_name;
    // payload["lastName"] = last_name;
    // payload["phone"] = phone;
    let res = await api.post(url, payload);
    // console.log(res.data.data);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User

export const login = (email, password) => async (dispatch) => {
  try {
    // var url = "/users/login";
    var url = "/login";
    var payload = {};
    payload["email"] = email;
    payload["password"] = password;
    let res = await api.post(url, payload);
    // console.log('res', res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: res.data.email, token: res.data.token },
    });
  } catch (error) {
    // const error = error.message;
    // console.log("error", error?.response );
    const errors = error?.response?.data?.message || "network error";
    dispatch(setAlert(errors, "danger"));
    // console.log(error);
    if (error) {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  }
};

// Logout
export const logout = () => async (dispatch) => {
  dispatch({
    type: CLEAR_MODEL,
  });
  dispatch({
    type: CLEAR_PLAYERS,
  });
  dispatch({
    type: LOGOUT,
  });
};
