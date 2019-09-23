import {
  HANDLE_STEP_CHANGE,
  HANDLE_INPUT_CHANGE,
  HANDLE_OPTION_CHANGE,
  CLEAR_ALL_FIELDS
} from "../actions/actionTypes";
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
      name: "Departamentul Relații Interne",
      selected: false,
      questions: [
        {
          title: "5 lucruri de ținut cont în organizarea unei petreceri?",
          answer: ""
        },
        {
          title:
            "Definește în stil propriu ce înseamnă o studenție reușită pentru tine",
          answer: ""
        }
      ]
    },
    RE: {
      name: "Departamentul Relații Externe",
      selected: false,
      questions: [
        {
          title: "Cum te descurci când cunoști o persoană nouă (importantă)?",
          answer: ""
        },
        {
          title: "Ce faci dacă dai peste o situație neașteptată?",
          answer: ""
        }
      ]
    },
    IT: {
      name: "Departamentul IT",
      selected: false,
      questions: [
        {
          title:
            "Ce secțiuni importante crezi că ar trebui sa conțina un site?",
          answer: ""
        },
        {
          title: "Zi-mi cel mai nebun lucru pe care l-ai făcut.",
          answer: ""
        }
      ]
    },
    PRO: {
      name: "Departamentul Proiecte",
      selected: false,
      questions: [
        {
          title:
            "Ce consideri că te recomandă pentru a fi membru al departamentului Proiecte?",
          answer: ""
        },
        {
          title: "Ce consideri că ar cuprinde o mapă de proiect?",
          answer: ""
        }
      ]
    },
    "PR&MEDIA": {
      name: "Departamentul Pr&Media",
      selected: false,
      questions: [
        {
          title: "În ce constă procesul tău de creare a unui material?",
          answer: ""
        },
        {
          title: "De unde te inspiri atunci când lucrezi pe un proiect?",
          answer: ""
        },

        {
          title: "Ce software-uri/tool-uri folosești? ",
          answer: ""
        }
      ]
    }
  },
  hoursPerWeek: Number
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
            name: "Departamentul Relații Interne",
            selected: false,
            questions: [
              {
                title: "5 lucruri de ținut cont în organizarea unei petreceri?",
                answer: ""
              },
              {
                title:
                  "Definește în stil propriu ce înseamnă o studenție reușită pentru tine",
                answer: ""
              }
            ]
          },
          RE: {
            name: "Departamentul Relatii  Externe",
            selected: false,
            questions: [
              {
                title:
                  "Cum te descurci când cunoști o persoană nouă (importantă)?",
                answer: ""
              },
              {
                title: "Ce faci dacă dai peste o situație neașteptată?",
                answer: ""
              }
            ]
          },
          IT: {
            name: "Departamentul IT",
            selected: false,
            questions: [
              {
                title:
                  "Ce secțiuni importante crezi că ar trebui să conțină un site?",
                answer: ""
              },
              {
                title: "Zi-mi cel mai nebun lucru pe care l-ai făcut.",
                answer: ""
              }
            ]
          },
          PRO: {
            name: "Departamentul Proiecte",
            selected: false,
            questions: [
              {
                title:
                  "Ce consideri că te recomandă pentru a fi membru al departamentului Proiecte?",
                answer: ""
              },
              {
                title: "Ce consideri că ar cuprinde o mapă de proiect?",
                answer: ""
              }
            ]
          },
          "PR&MEDIA": {
            name: "Departamentul Pr&Media",
            selected: false,
            questions: [
              {
                title: "În ce constă procesul tău de creare a unui material?",
                answer: ""
              },
              {
                title: "De unde te inspiri atunci când lucrezi pe un proiect?",
                answer: ""
              },

              {
                title: "Ce software-uri/tool-uri folosești? ",
                answer: ""
              }
            ]
          }
        },
        hoursPerWeek: Number
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

    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [payload.name]: payload.value
      };

    default:
      return state;
  }
};
export default mainReducer;
