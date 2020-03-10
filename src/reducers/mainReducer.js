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
      position: null,
      questions: [
        {
          title: "Studiu de caz: ai apartamentul plin de gunoi. Colegii de apartament au plecat la magazin sa ia materiale ca sa faceti curat. Tu cu un coleg/colega ati ramas in apartament. Ce faci pana se intorc colegii de apartament de la magazin?",
          answer: ""
        },
        {
          title:
            "Unde mergi sa pertreci ?",
          answer: ""
        },
        {
          title:
              "Care consideri ca este viata perfecta de student ?",
          answer: ""
        },
        {
          title:
              "Propune un plan pentru un Citybreak care sa includa metode de transport, activitati, ce ati vizita si unde ati sta, dar si cum sa motivezi prietenii sa mearga cu tine.",
          answer: ""
        },
        {
          title:
              "Te-a enervat foarte tare un coleg cand erati prin oras(mediu permisiv). Scrie aici care este prima reactie(fapte si vorbe). Injuratur permise, scrieti ce vreti.",
          answer: ""
        }
      ]
    },
    RE: {
      name: "Departamentul Relații Externe",
      selected: false,
      position: null,
      questions: [
        {
          title: "Care sunt 3 cuvinte care te caracterizeaza ?",
          answer: ""
        },
        {
          title: "In cuvintele tale, ce este un contract ?",
          answer: ""
        },
        {
          title: "Prima impresie conteaza ? Argumente.",
          answer: ""
        },
        {
          title: "Daca situatia ar cere, ce ai alege dintre amanarea unui eveniment mare si pierderea relatiei cu un sponsor ? Argumente.",
          answer: ""
        }
      ]
    },
    IT: {
      name: "Departamentul IT",
      selected: false,
      position: null,
      questions: [
        {
          title:
            "Daca cel mai bun prieten al tau ar crea un design pentru proiectul tau si tie nu ti-ar placea deloc, i-ai spune?(gandeste-te ca acesta s-ar putea supara)",
          answer: ""
        },
        {
          title: "Cate ore ai putea aloca pe saptamana pentru a lucra la un proiect ASII? Ai putea veni la training uri in weekend? (gandeste-te ca trebuie sa mergi si la facultate)",
          answer: ""
        },
        {
          title: "Daca lucrezi intr-o echipa de 5 oameni, iar teamlead-ul ti-a dat un task si te-ai împotmolit, preferi sa-ti intrebi colegii de echipa sau sa cauti pe internet rezolvarea? ",
          answer: ""
        },
        {
          title: "Cu ce ai mai lucrat pana acum? (ex: HTML, CSS, OOP, Angular, Java, JavaScript)",
          answer: ""
        }
      ]
    },
    PRO: {
      name: "Departamentul Proiecte",
      selected: false,
      position: null,
      questions: [
        {
          title:
            "Cum te-ar descrie prietenii tai in 3 cuvinte?",
          answer: ""
        },
        {
          title: "Cunosti tooluri de management? Daca da, care ?",
          answer: ""
        },
        {
          title: "Ce crezi ca ar contine o mapa de proiect ?",
          answer: ""
        },
        {
          title: "Descrie in cateva cuvinte ce consideri ca inseamna etapa de monitorizare a unui proiect ?",
          answer: ""
        }
      ]
    },
    "PR&MEDIA": {
      name: "Departamentul Pr&Media",
      selected: false,
      position: null,
      questions: [
        {
          title: "Pe ce domenii stii sa lucrezi?",
          options: [
            'Compozitie text',
            'Design Grafic',
            'Montaj video',
            'Fotografie/Editare foto',
            'Filmare/ Montaj foto-video',
            'Marketing',
            'Altele...',
          ],
          answer: ""
        },
        {
          title: "Pe ce domenii ai vrea sa inveti sa lucrezi ?",
          options: [
            'Compozitie text',
            'Design Grafic',
            'Montaj video',
            'Fotografie/Editare foto',
            'Filmare/ Montaj foto-video',
            'Marketing',
            'Altele...',
          ],
          answer: ""
        },
        {
          title: "Care este sursa ta de inspiratie cand redactezi/creezi un material?",
          answer: ""
        },
        {
          title: "Intr-o reclama ce este mai important, textul sau imagine? Justifica.",
          answer: ""
        },
        {
          title: "Ce software/tool-uri folosesti ?",
          answer: ""
        },
        {
          title: "Vino cu un slogan nou pentru Coca-cola",
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
            position: null,
            questions: [
              {
                title: "Studiu de caz: ai apartamentul plin de gunoi. Colegii de apartament au plecat la magazin sa ia materiale ca sa faceti curat. Tu cu un coleg/colega ati ramas in apartament. Ce faci pana se intorc colegii de apartament de la magazin?",
                answer: ""
              },
              {
                title:
                    "Unde mergi sa pertreci ?",
                answer: ""
              },
              {
                title:
                    "Care consideri ca este viata perfecta de student ?",
                answer: ""
              },
              {
                title:
                    "Propune un plan pentru un Citybreak care sa includa metode de transport, activitati, ce ati vizita si unde ati sta, dar si cum sa motivezi prietenii sa mearga cu tine.",
                answer: ""
              },
              {
                title:
                    "Te-a enervat foarte tare un coleg cand erati prin oras(mediu permisiv). Scrie aici care este prima reactie(fapte si vorbe). Injuratur permise, scrieti ce vreti.",
                answer: ""
              }
            ]
          },
          RE: {
            name: "Departamentul Relații Externe",
            selected: false,
            position: null,
            questions: [
              {
                title: "Care sunt 3 cuvinte care te caracterizeaza ?",
                answer: ""
              },
              {
                title: "In cuvintele tale, ce este un contract ?",
                answer: ""
              },
              {
                title: "Prima impresie conteaza ? Argumente.",
                answer: ""
              },
              {
                title: "Daca situatia ar cere, ce ai alege dintre amanarea unui eveniment mare si pierderea relatiei cu un sponsor ? Argumente.",
                answer: ""
              }
            ]
          },
          IT: {
            name: "Departamentul IT",
            selected: false,
            position: null,
            questions: [
              {
                title:
                    "Daca cel mai bun prieten al tau ar crea un design pentru proiectul tau si tie nu ti-ar placea deloc, i-ai spune?(gandeste-te ca acesta s-ar putea supara)",
                answer: ""
              },
              {
                title: "Cate ore ai putea aloca pe saptamana pentru a lucra la un proiect ASII? Ai putea veni la training uri in weekend? (gandeste-te ca trebuie sa mergi si la facultate)",
                answer: ""
              },
              {
                title: "Daca lucrezi intr-o echipa de 5 oameni, iar teamlead-ul ti-a dat un task si te-ai împotmolit, preferi sa-ti intrebi colegii de echipa sau sa cauti pe internet rezolvarea? ",
                answer: ""
              },
              {
                title: "Cu ce ai mai lucrat pana acum? (ex: HTML, CSS, OOP, Angular, Java, JavaScript)",
                answer: ""
              }
            ]
          },
          PRO: {
            name: "Departamentul Proiecte",
            selected: false,
            position: null,
            questions: [
              {
                title:
                    "Cum te-ar descrie prietenii tai in 3 cuvinte?",
                answer: ""
              },
              {
                title: "Cunosti tooluri de management? Daca da, care ?",
                answer: ""
              },
              {
                title: "Ce crezi ca ar contine o mapa de proiect ?",
                answer: ""
              },
              {
                title: "Descrie in cateva cuvinte ce consideri ca inseamna etapa de monitorizare a unui proiect ?",
                answer: ""
              }
            ]
          },
          "PR&MEDIA": {
            name: "Departamentul Pr&Media",
            selected: false,
            position: null,
            questions: [
              {
                title: "Pe ce domenii stii sa lucrezi?",
                options: [
                  'Compozitie text',
                  'Design Grafic',
                  'Montaj video',
                  'Fotografie/Editare foto',
                  'Filmare/ Montaj foto-video',
                  'Marketing',
                  'Altele...',
                ],
                answer: ""
              },
              {
                title: "Pe ce domenii ai vrea sa inveti sa lucrezi ?",
                options: [
                  'Compozitie text',
                  'Design Grafic',
                  'Montaj video',
                  'Fotografie/Editare foto',
                  'Filmare/ Montaj foto-video',
                  'Marketing',
                  'Altele...',
                ],
                answer: ""
              },
              {
                title: "Care este sursa ta de inspiratie cand redactezi/creezi un material?",
                answer: ""
              },
              {
                title: "Intr-o reclama ce este mai important, textul sau imagine? Justifica.",
                answer: ""
              },
              {
                title: "Ce software/tool-uri folosesti ?",
                answer: ""
              },
              {
                title: "Vino cu un slogan nou pentru Coca-cola",
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
