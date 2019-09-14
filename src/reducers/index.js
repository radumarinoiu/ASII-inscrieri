import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import errorReducer from "./errorReducer";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
export default combineReducers({
  main: mainReducer,
  error: errorReducer,
  admin: adminReducer,
  auth: authReducer
});
