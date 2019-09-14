import * as T from "./actionTypes";

const jwtAuthentification = token => {
  return fetch("http://localhost:5000/api/v1/users/verify", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "auth-token": token
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export const authenticate = _ => dispatch => {
  const token = window.sessionStorage.token;
  if (token) {
    jwtAuthentification(token).then(res => {
      if (res) {
        dispatch({
          type: T.SET_AUTH,
          payload: true
        });
        if (window.location.pathname === "/login") {
          window.location = "/dashboard";
        }
      } else {
        window.sessionStorage.clear();
        dispatch({
          type: T.SET_AUTH,
          payload: false
        });
        //   window.location = "/login";
      }
    });
  } else {
    dispatch({
      type: T.SET_AUTH,
      payload: false
    });
    window.location = "/login";
  }
};

export const login = dataObj => dispatch => {
  const user = {
    email: dataObj.email,
    password: dataObj.password
  };
  fetch("http://localhost:5000/api/v1/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(res => {
      if (!res.message) {
        window.sessionStorage.setItem("token", res.token);
        window.sessionStorage.setItem("auth", true);
        window.location = "/dashboard";
      } else {
        dispatch({
          type: T.SET_LOGIN_ERROR,
          payload: res.message
        });
      }
    })
    .catch(err => console.log(err));
};
