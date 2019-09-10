import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import errorReducer from "./errorReducer";
import adminReducer from "./adminReducer";
export default combineReducers({
  main: mainReducer,
  error: errorReducer,
  admin: adminReducer
});
