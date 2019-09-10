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
      name: "Departamentul Relatii Interne",
      selected: false,
      questions: [
        {
          title: "5 lucruri de tinut cont in organizarea unei petreceri?",
          answer: ""
        },
        {
          title: "Un motiv pentru care nu ar trebui sa te chem la interviu?",
          answer: ""
        },
        {
          title:
            "Argumenteaza altfel incat sa ma răzgandesc in legatura cu punctul anterior",
          answer: ""
        }
      ]
    },
    RE: {
      name: "Departamentul Relatii Externe",
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
            "Ce sectiuni importante crezi ca ar trebui sa contina un site?",
          answer: ""
        },
        {
          title: "Zi-mi cel mai nebun lucru pe care l-ai facut.",
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
          title: "De unde te inspiri atunci când lucrezi pe un proiect?",
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
            name: "Departamentul Relatii Interne",
            selected: false,
            questions: [
              {
                title: "5 lucruri de tinut cont in organizarea unei petreceri?",
                answer: ""
              },
              {
                title:
                  "Un motiv pentru care nu ar trebui sa te chem la interviu?",
                answer: ""
              },
              {
                title:
                  "Argumenteaza altfel incat sa ma răzgandesc in legatura cu punctul anterior",
                answer: ""
              }
            ]
          },
          RE: {
            name: "Departamentul Relatii Externe",
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
                  "Ce sectiuni importante crezi ca ar trebui sa contina un site?",
                answer: ""
              },
              {
                title: "Zi-mi cel mai nebun lucru pe care l-ai facut.",
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
