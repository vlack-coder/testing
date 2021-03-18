import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  // ACCOUNT_DELETED
} from "../actions/types";

const initialState = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
      };
    // case REGISTER_SUCCESS:
    case LOGIN_SUCCESS: 
    console.log(payload.token);
    return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      };
    //   case ACCOUNT_DELETED:
    //     return {
    //       ...state,
    //       token: null,
    //       isAuthenticated: false,
    //       loading: false,
    //       user: null
    //     };
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.clear()
      return {
      
      };
    default:
      return state;
  }
}

export default authReducer;
