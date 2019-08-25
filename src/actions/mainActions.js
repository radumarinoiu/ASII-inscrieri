import {
  HANDLE_STEP_CHANGE,
  ADD_NEW_COMMENT,
  REMOVE_COMMENT,
  HANDLE_INPUT_CHANGE,
  HANDLE_ERROR_CHANGE,
  HANDLE_OPTION_CHANGE,
  CLEAR_ALL_FIELDS
} from "./actionTypes";

export const handleStepChange = objData => dispatch => {
  dispatch({
    type: HANDLE_STEP_CHANGE,
    payload: objData
  });
};
export const submitForm = state => dispatch => {
  const {
    fName,
    lName,
    email,
    faculty,
    yearOfStudy,
    description,
    bestQuality,
    whyASII,
    departments,
    descriptionOfDepartments,
    phoneNumber,
    hoursPerWeek
  } = state;
  const volunteer = {
    firstName: fName,
    lastName: lName,
    email,
    faculty,
    yearOfStudy,
    description,
    bestQuality,
    whyASII,
    departments,
    descriptionOfDepartments,
    phoneNumber,
    hoursPerWeek
  };

  const url = "https://asii-join-api.herokuapp.com/api/v1/volunteers";
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(volunteer)
  })
    .then(res =>
      res.json().then(data => ({ status: res.status, ok: res.ok, body: data }))
    )
    .then(res => {
      if ((res.ok && res.status === 200) || res.status === 201) {
        dispatch({
          type: CLEAR_ALL_FIELDS
        });
        state.history.push("/success");
      }else{
        
        state.history.push("/error-on-submit");
      }
    });
};
export const handleOptionChange = objData => dispatch => {
  dispatch({
    type: HANDLE_OPTION_CHANGE,
    payload: objData
  });
  return Promise.resolve();
};

export const handleErrorChange = errorType => dispatch => {
  dispatch({
    type: HANDLE_ERROR_CHANGE,
    payload: errorType
  });

  return Promise.resolve();
};

export const handleInputChange = objData => dispatch => {
  dispatch({
    type: HANDLE_INPUT_CHANGE,
    payload: objData
  });
  return Promise.resolve();
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
