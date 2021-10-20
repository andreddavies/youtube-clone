import search from "./searchReducers";
import player from "./playerReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  search,
  player,
});

export default rootReducer;
