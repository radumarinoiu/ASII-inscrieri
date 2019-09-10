import * as T from "./actionTypes";

export const loadingData = status => dispatch => {
  dispatch({
    type: T.LOADING_DATA,
    payload: status
  });
};

export const getData = _ => dispatch => {
  
  fetch("https://asii-join-api.herokuapp.com/api/v1/volunteers")
    .then(res => res.json())
    .then(res => {
      if (res.error) throw res.error;
      dispatch({
        type: T.SET_DATA,
        payload: {
          total: res.total,
          volunteers: res.volunteers
        }
      });
      dispatch({
        type: T.LOADING_DATA,
        payload: false
      });
    });
};

export const selectVolunteer = id => dispatch => {
  dispatch({
    type: T.SELECT_VOLUNTEER,
    payload: id
  });
};

export const addCommentToVolunteer = comm => dispatch => {
  fetch("https://asii-join-api.herokuapp.com/api/v1/volunteers/" + comm.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "PATCH",
    body: JSON.stringify({ comments: comm.comments })
  })
    .then(res => res.json())
    .then(r => {
      // console.log("done");
      fetch("https://asii-join-api.herokuapp.com/api/v1/volunteers/" + comm.id)
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: T.SET_ONE_VOLUNTEER,
            payload: res
          });
        });
    });
};
