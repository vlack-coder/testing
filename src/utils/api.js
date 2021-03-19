import axios from "axios";
import store from "../store";
import { LOGOUT } from "../actions/types";

const api = axios.create({
  // baseURL: "http://parallelscore.xyz:5132",
  baseURL: "https://hamazorn.herokuapp.com",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // "method": "GET",
  // "headers": {
  //     "x-rapidapi-host": "v3.football.api-sports.io",
  //     "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
  // }
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "a9f536a685c2a45e106a33407f705620",
  },
});

// a9f536a685c2a45e106a33407f705620
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.status === 401) {
//       store.dispatch({ type: LOGOUT });
//     }
//     return Promise.reject(err);
//   }
// );

export default api;
