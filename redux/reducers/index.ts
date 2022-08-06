import { combineReducers } from "redux";
import authhentication from "./authReducer";

const rootReducer = combineReducers({
  creds: authhentication,
});

export default rootReducer;
