import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { loadState, saveState } from "./localstorage";
import _ from "lodash";

const persistedState = loadState();
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);
// using throttle to call the function at an interval of time
store.subscribe(
  _.throttle(() => {
    saveState({
      main: store.getState().main
    });
  }, 1000)
);

export default store;
