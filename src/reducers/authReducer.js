import { SET_AUTH, SET_LOGIN_ERROR } from "../actions/actionTypes";
const initialState = {
  isAuthenticated: false,
  loginError: ""
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: payload
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: payload
      };

    default: {
      return state;
    }
  }
};

export default authReducer;
