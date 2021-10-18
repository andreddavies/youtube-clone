import search from "./searchReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  search,
});

export default rootReducer;
