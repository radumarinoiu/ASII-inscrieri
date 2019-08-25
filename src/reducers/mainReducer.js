import {
  HANDLE_STEP_CHANGE,
  ADD_NEW_COMMENT,
  REMOVE_COMMENT,
  HANDLE_INPUT_CHANGE,
  HANDLE_ERROR_CHANGE,
  HANDLE_OPTION_CHANGE,
  CLEAR_ALL_FIELDS
} from "../actions/actionTypes";
import uuid from "uuid/v4";
const initialState = {
  stepNo: 0,
  fName: "",
  lName: "",
  phoneNumber: "",
  faculty: "",
  yearOfStudy: "",
  email: "",
  description: "",
  bestQuality: "",
  whyASII: "",
  stepZeroNextButton: false,
  stepOneNextButton: false,
  stepTwoNextButton: false,
  descriptionOfDepartments: "",
  selectedDepartments: [],
  selectingDepartment: "",
  departments: {
    RI: {
      name: "Departamentul Relatii Interne",
      selected: false
    },
    RE: {
      name: "Departamentul Relatii Externe",
      selected: false
    },
    IT: {
      name: "Departamentul IT",
      selected: false
    },
    PRO: {
      name: "Departamentul Proiecte",
      selected: false
    },
    "PR&MEDIA": {
      name: "Departamentul Pr&Media",
      selected: false
    }
  },
  hoursPerWeek: Number,
  errors: {
    fName: "",
    lName: "",
    phoneNumber: "",
    faculty: "",
    yearOfStudy: "",
    email: "",
    description: "",
    bestQuality: "",
    whyASII: "",
    descriptionOfDepartments: "",
    hoursPerWeek: "",
    selectingDepartment: ""
  }
};

const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_ALL_FIELDS:
      return {
        ...state,
        stepNo: 0,
        fName: "",
        lName: "",
        phoneNumber: "",
        faculty: "",
        yearOfStudy: "",
        email: "",
        description: "",
        bestQuality: "",
        whyASII: "",
        stepZeroNextButton: false,
        stepOneNextButton: false,
        stepTwoNextButton: false,
        descriptionOfDepartments: "",
        selectedDepartments: [],
        selectingDepartment: "",
        departments: {
          RI: {
            name: "Departamentul Relatii Interne",
            selected: false
          },
          RE: {
            name: "Departamentul Relatii Externe",
            selected: false
          },
          IT: {
            name: "Departamentul IT",
            selected: false
          },
          PRO: {
            name: "Departamentul Proiecte",
            selected: false
          },
          "PR&MEDIA": {
            name: "Departamentul Pr&Media",
            selected: false
          }
        },
        hoursPerWeek: Number,
        errors: {
          fName: "",
          lName: "",
          phoneNumber: "",
          faculty: "",
          yearOfStudy: "",
          email: "",
          description: "",
          bestQuality: "",
          whyASII: "",
          descriptionOfDepartments: "",
          hoursPerWeek: "",
          selectingDepartment: ""
        }
      };
    case HANDLE_STEP_CHANGE:
      return {
        ...state,
        stepNo: payload
      };

    case HANDLE_OPTION_CHANGE:
      return {
        ...state,
        departments: {
          ...state.departments,
          ...payload.value
        }
      };
    case HANDLE_ERROR_CHANGE:
      return {
        ...state,
        errors: {
          ...state.errors,
          [payload.name]: payload.value
        }
      };
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [payload.name]: payload.value
      };
    case ADD_NEW_COMMENT:
      const { fName, lName, subject, message, comments } = state;
      return {
        ...state,
        comments: [...comments, { id: uuid(), fName, lName, subject, message }],
        fName: "",
        lName: "",
        subject: "",
        message: ""
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== payload)
      };
    default:
      return state;
  }
};
export default mainReducer;
