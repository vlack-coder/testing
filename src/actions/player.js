// import api from '../utils/api';
// import { setAlert } from './alert';
import {
  GET_PLAYERS,
  PLAYER_ERROR,
  // UPDATE_LIKES,
  DELETE_PLAYER,
  GET_PLAYERS_BY_CLUB,
  ADD_PLAYER,
  GET_PLAYER,
  // ADD_COMMENT,
  // REMOVE_COMMENT
} from "../actions/types";
import axios from "axios";

// Get posts
export const getPlayers = () => async (dispatch) => {
  let url =
    "https://platform.parallelscore.io/internal-fetch-api/V1/sonalysis/scraped-player-info";
  try {
    const res = await axios.get(url);

    dispatch({
      type: GET_PLAYERS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: PLAYER_ERROR,
      payload: { msg: err.response, status: err.response.status },
    });
  }
};

//Get Players By Club
export const getPlayersByClub = (club1, club2) => async (dispatch) => {
  let url1 = `https://platform.parallelscore.io/internal-fetch-api/V1/sonalysis/scraped-player-info?club=${club1}`;
  let url2 = `https://platform.parallelscore.io/internal-fetch-api/V1/sonalysis/scraped-player-info?club=${club2}`;
  try {
    // let response = {};
    const res = await axios.get(url1);
    const resP = await axios.get(url2);
    console.log("rkrkrasacaaa", resP.data.data);
    // response["res"] = res.data.data;
    // response["resp"] = resP;
    const res1 = res.data.data.slice(0, 16);
    const res2 = resP.data.data.slice(0, 16);;
    const response = res1.concat(res2);
    const list = response
      .map((item) => ({
        club: item?.club,
        name: item?.name,
        image: item?.image,
        pN: item?.playerNumber,
      }))
      .filter((value, index, self) => self.indexOf(value) === index);
    // const list = response.filter((x, i, a) => a.indexOf(x.name) == i)
    // console.log(list);
    dispatch({
      type: GET_PLAYERS_BY_CLUB,
      payload: list,
    });
  } catch (err) {
    dispatch({
      type: PLAYER_ERROR,
      payload: { msg: err.response },
    });
  }
};

// Add like
// export const addLike = (id) => async (dispatch) => {
//   try {
//     const res = await api.put(`/posts/like/${id}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data },
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// Remove like
// export const removeLike = (id) => async (dispatch) => {
//   try {
//     const res = await api.put(`/posts/unlike/${id}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data },
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// Delete post
// export const deletePlayer = (id) => async (dispatch) => {
//   try {
//     await api.delete(`/posts/${id}`);

//     dispatch({
//       type: DELETE_PLAYER,
//       payload: id,
//     });

//     dispatch(setAlert("Post Removed", "success"));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// Add post
// export const addPost = (formData) => async (dispatch) => {
//   try {
//     const res = await api.post("/posts", formData);

//     dispatch({
//       type: ADD_PLAYER,
//       payload: res.data,
//     });

//     dispatch(setAlert("Post Created", "success"));
//   } catch (err) {
//     dispatch({
//       type: PLAYER_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// Get post
// export const getPlayer = (id) => async (dispatch) => {
//   try {
//     const res = await api.get(`/posts/${id}`);

//     dispatch({
//       type: GET_PLAYER,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: PLAYER_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// Add comment
// export const addComment = (postId, formData) => async (dispatch) => {
//   try {
//     const res = await api.post(`/posts/comment/${postId}`, formData);

//     dispatch({
//       type: ADD_COMMENT,
//       payload: res.data,
//     });

//     dispatch(setAlert("Comment Added", "success"));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// Delete comment
// export const deleteComment = (postId, commentId) => async (dispatch) => {
//   try {
//     await api.delete(`/posts/comment/${postId}/${commentId}`);

//     dispatch({
//       type: REMOVE_COMMENT,
//       payload: commentId,
//     });

//     dispatch(setAlert("Comment Removed", "success"));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };
