import {
  GET_ANALYSIS,
  ANALYSIS_ERROR,
  POST_VIDEO,
  GET_VIDEO,
  GET_ANALYSIS_HISTORY,
  CLEAR_MODEL,
} from "../actions/types";

const initialState = {
  modelData: [],
  uploadHistory: [],
  uploadedVideo: null,
  loading: true,
  error: {},
  status: false,
  statusText: ''
};

function playerReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ANALYSIS:
      return {
        ...state,
        modelData: payload.model_data,
        status: payload.analyzed,
        statusText: payload.statusText,
        loading: false,
      };
    case POST_VIDEO:
      return {
        ...state,
        uploadedVideo: payload,
        loading: false,
      };
    case ANALYSIS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case GET_ANALYSIS_HISTORY:
      return {
        ...state,
        uploadHistory: [...payload, state.uploadHistory],
      };
    case CLEAR_MODEL:
      return initialState;

    default:
      return state;
  }
}

export default playerReducer;
