import {
  HANDLE_INPUT_CHANGE,
  ADD_NEW_COMMENT,
  REMOVE_COMMENT
} from "./actionTypes";

export const handleInputChange = objData => dispatch => {
  dispatch({
    type: HANDLE_INPUT_CHANGE,
    payload: objData
  });
};

export const addNewComment = _ => dispatch => {
  dispatch({
    type: ADD_NEW_COMMENT
  });
};
export const removeComment = id => dispatch => {
  dispatch({
    type: REMOVE_COMMENT,
    payload: id
  });
};
