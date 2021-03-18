import {
  GET_PLAYERS,
  PLAYER_ERROR,
  // UPDATE_LIKES,
  DELETE_PLAYER,
  ADD_PLAYER,
  GET_PLAYER,
  CLEAR_PLAYERS,
  GET_PLAYERS_BY_CLUB,
  // ADD_COMMENT,
  // REMOVE_COMMENT
} from "../actions/types";

const initialState = {
  players: [],
  player: null,
  loading: true,
  error: {},
};

function playerReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PLAYERS:
      // console.log("dd", payload);
      return {
        ...state,
        players: payload,
        loading: false,
      };
    case GET_PLAYERS_BY_CLUB:
      // console.log("dd", payload);
      return {
        ...state,
        players: payload,
        loading: false,
      };
    case GET_PLAYER:
      return {
        ...state,
        player: payload,
        loading: false,
      };
    case ADD_PLAYER:
      return {
        ...state,
        players: [payload, ...state.players],
        loading: false,
      };
    case DELETE_PLAYER:
      return {
        ...state,
        players: state.players.filter((player) => player._id !== payload),
        loading: false,
      };
    case PLAYER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PLAYERS:
      return initialState;
    default:
      return state;
  }
}

export default playerReducer;
