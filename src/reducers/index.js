import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth";
import player from "./player";
import analysis from "./analysis";
import alert from "./alert";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["player", "auth", "analysis"],
};

const rootReducer = combineReducers({
  player,
  auth,
  analysis,
  alert,
});
export default persistReducer(persistConfig, rootReducer);
