import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import thunk from "redux-thunk";

const middlewares = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
