import {
    INPUT_CHANGE
  } from "../actions/actionTypes";

  const initialState = {
      name:'',
      nameError: ''
  };

  const inputReducer = (state = initialState, action) => {
      console.log('reducer',action);

      switch (type) {
          case INPUT_CHANGE:
          return Object.assign({},state, { inputValue: text });
          default: 
            return state;

      }
  }

  export default inputReducer;