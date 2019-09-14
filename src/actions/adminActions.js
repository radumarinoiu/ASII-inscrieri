import * as T from "./actionTypes";

export const loadingData = status => dispatch => {
  dispatch({
    type: T.LOADING_DATA,
    payload: status
  });
};

export const addingFakeData = _ => {
  let i = 0;
  while (i++ < 2) {
    const volunteer = {
      name: "Nume Volunteer " + i,
      email: "email_volunteer" + i + "@yahoo.com",
      faculty: "Informatica 2",
      description:
        "Lorem impusm Lorem impusm Lorem impusm Lorem impusm Lorem impusm Lorem impusm ",
      bestQuality: "Lorem impusm ",
      whyASII: "Lorem impusm Lorem impusm ",
      phoneNumber: "0789456123",
      hoursPerWeek: i,
      comments: {},
      status: "maybe",
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
    };
    fetch("https://asii-join-api.herokuapp.com/api/v1/volunteers", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(volunteer)
    });
  }
};

export const getData = _ => dispatch => {
  fetch("https://asii-join-api.herokuapp.com/api/v1/volunteers")
    .then(res => res.json())
    .then(res => {
      if (res.error) throw res.error;
      dispatch({
        type: T.SET_DATA,
        payload: {
          total: res.total,
          volunteers: res.volunteers
        }
      });
      dispatch({
        type: T.LOADING_DATA,
        payload: false
      });
    });
};

export const selectVolunteer = id => dispatch => {
  dispatch({
    type: T.SELECT_VOLUNTEER,
    payload: id
  });
};

export const setStatus = (status, id) => dispatch => {
  fetch("https://asii-join-api.herokuapp.com/api/v1/volunteers/" + id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "PATCH",
    body: JSON.stringify({ status })
  })
    .then(res => res.json())
    .then(r => {
      // fetch("https://asii-join-api.herokuapp.com/api/v1/volunteers/" + id)
      //   .then(res => res.json())
      //   .then(res => {
      //     dispatch({
      //       type: T.SET_ONE_VOLUNTEER,
      //       payload: res
      //     });
      //   });
      dispatch({
        type: T.LOADING_DATA,
        payload: true
      });
      fetch("https://asii-join-api.herokuapp.com/api/v1/volunteers")
        .then(res => res.json())
        .then(res => {
          if (res.error) throw res.error;
          dispatch({
            type: T.SET_DATA,
            payload: {
              total: res.total,
              volunteers: res.volunteers
            }
          });
          dispatch({
            type: T.LOADING_DATA,
            payload: false
          });
        });
    });
};
export const addCommentToVolunteer = comm => dispatch => {
  fetch("https://asii-join-api.herokuapp.com/api/v1/volunteers/" + comm.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "PATCH",
    body: JSON.stringify({ comments: comm.comments })
  })
    .then(res => res.json())
    .then(r => {
      fetch("https://asii-join-api.herokuapp.com/api/v1/volunteers/" + comm.id)
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: T.SET_ONE_VOLUNTEER,
            payload: res
          });
        });
    });
};
