import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./error_reducer";
import user from "./data_reducer";

const RootReducer = combineReducers({
  session,
  errors,
  user
});

export default RootReducer;
