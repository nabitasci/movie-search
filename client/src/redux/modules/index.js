import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import searchMovie from "./searchMovie";

export default history =>
  combineReducers({
    router: connectRouter(history),
    searchMovie
  });
