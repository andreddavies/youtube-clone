import { combineReducers } from "redux";
import searchReducers from "./searchReducers";

const rootReducer = combineReducers({
  searchReducers,
});

export default rootReducer;
