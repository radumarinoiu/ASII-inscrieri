import {
  SET_DATA,
  SELECT_VOLUNTEER,
  SET_ONE_VOLUNTEER,
  LOADING_DATA
} from "../actions/actionTypes";

const initialState = {
  showFilter: false,
  showUserDetails: false,
  total: 0,
  selectedVolunteer: "",
  volunteers: [],
  isLoading: true
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        total: payload.total,
        volunteers: payload.volunteers
      };
    case LOADING_DATA:
      return {
        ...state,
        isLoading: payload
      };
    case SELECT_VOLUNTEER:
      return {
        ...state,
        selectedVolunteer: payload
      };
    case SET_ONE_VOLUNTEER:
      const vols = state.volunteers;
      for (let i in vols) {
        if (vols[i]._id === payload._id) {
          vols[i] = payload;
        }
      }

      return {
        ...state,
        volunteers: [...vols]
      };
    default:
      return state;
  }
};
export default adminReducer;
