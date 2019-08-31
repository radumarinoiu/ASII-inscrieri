import {
  HANDLE_STEP_CHANGE,
  HANDLE_INPUT_CHANGE,
  HANDLE_ERROR_CHANGE,
  HANDLE_OPTION_CHANGE,
  CLEAR_ALL_FIELDS,
  HANDLE_CUSTOM_ERROR_CHANGE
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
    email,
    faculty,
    description,
    bestQuality,
    whyASII,
    departments,
    descriptionOfDepartments,
    phoneNumber,
    hoursPerWeek
  } = state;
  const volunteer = {
    name: fName,
    email,
    faculty,
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
  
  export const handleCustomErrorChange = objData => dispatch => {
    console.log(objData,'mmmmm');
  dispatch({
    type: HANDLE_CUSTOM_ERROR_CHANGE,
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
