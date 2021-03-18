import {
  GET_ANALYSIS,
  ANALYSIS_ERROR,
  POST_VIDEO,
  GET_VIDEO,
  GET_ANALYSIS_HISTORY,
} from "../actions/types";
import axios from "axios";
// import sha256 from 'crypto-js/sha256';
import md5 from "md5";
import { v4 as uuidv4 } from "uuid";
import api from "../utils/api";

// const Axios = axios.defaults.headers.common = {'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…QxM30.voLiTVPFzLqcyYindSo5e7JnJYDIzZQyvryd088NgtA"}
// post Video
export const postVideo = (vid, tokken) => async (dispatch) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("file", vid);
    let url = "http://parallelscore.xyz:5132/upload";
    let token = tokken;
    console.log("analysis", token);
    await axios
      .post(url, bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
        },
      })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    dispatch({
      type: POST_VIDEO,
      // payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ANALYSIS_ERROR,
      // payload: { msg: err.response },s
    });
  }
};
// export const getAnalysisHistory = async () => {
//   try {
//     axioscall
//     dispatch({
//       type: GET_ANALYSIS,
//       payload
//     })
//   } catch (error) {}
// };

// export const getAnalysis = () => async (dispatch) => {
//   try {
//    let url = `/upload/dummy/data `
//    let res = await api.get(url);
//   //  console.log(res.data)
//   //  console.log(url)
//    dispatch({
//     type: GET_ANALYSIS,
//     payload: res.data
//   })
//   } catch (error) {}
// };
export const getAnalysis = (modeldata) => async (dispatch) => {
  try {
    //  console.log(res.data)
    //  console.log(url)
    dispatch({
      type: GET_ANALYSIS,
      payload: modeldata,
    });
  } catch (error) {}
};

export const getAnalysisHistory = (user_id) => async (dispatch) => {
  try {
    let url = `upload/users/${user_id}`;
    let res = await api.get(url);
    // console.log("AH", res.data.data);
    const ah = res.data.data.map((item) => {
      return {
        filename: item.last_media_url,
        createdat: new Intl.DateTimeFormat().format(new Date(item.createdAt)),
        statusText: item.statusText,
      };
    });
    // console.log("drake", ah);

    dispatch({
      type: GET_ANALYSIS_HISTORY,
      payload: ah,
    });
  } catch (error) {}
};
