import {
  CLEAR_ERRORS_FIELDS,
  HANDLE_CUSTOM_ERROR_CHANGE,
  HANDLE_ERROR_CHANGE
} from "../actions/actionTypes";

const initialState = {
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
    selectingDepartment: "",
    departments: {
      RI: [
        {
          question0: ""
        },
        {
          question1: ""
        }
      ],
      IT: [
        {
          question0: ""
        },
        {
          question1: ""
        }
      ],
      RE: [
        {
          question0: ""
        },
        {
          question1: ""
        }
      ],
      PRO: [
        {
          question0: ""
        },
        {
          question1: ""
        }
      ],
      "PR&MEDIA": [
        {
          question0: ""
        },
        {
          question1: ""
        },
        {
          question2: ""
        }
      ]
    }
  }
};

const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_CUSTOM_ERROR_CHANGE:
      return {
        ...state,
        errors: {
          ...state.errors,
          departments: {
            ...state.errors.departments,
            ...payload.departments
          }
        }
      };
    case CLEAR_ERRORS_FIELDS:
      return {
        ...state,

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
          selectingDepartment: "",
          departments: {
            RI: [
              {
                question0: ""
              },
              {
                question1: ""
              }
            ],
            IT: [
              {
                question0: ""
              },
              {
                question1: ""
              }
            ],
            RE: [
              {
                question0: ""
              },
              {
                question1: ""
              }
            ],
            PRO: [
              {
                question0: ""
              },
              {
                question1: ""
              }
            ],
            "PR&MEDIA": [
              {
                question0: ""
              },
              {
                question1: ""
              },
              {
                question2: ""
              }
            ]
          }
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

    default:
      return state;
  }
};
export default errorReducer;
