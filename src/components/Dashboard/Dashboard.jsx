import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.css";
import * as M from "../../../node_modules/materialize-css/dist/js/materialize.js";
import "./Dashboard.scss";
import UserItem from "../shared/UserItem/UserItem";
import Comment from "../shared/Comment/Comment";
export default class Dashboard extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="row containerDashboard">
        <div className="leftMenu col s12 m12 l3 xl3">
          <div className="filtersMeniu">
            <div className="filtersHeader shadow1">
              <h2>Filtre</h2>
              <span>
                <i class="fas fa-sort-down"></i>
              </span>
            </div>

            <div className="filterZone">
              <label>
                <input id="IT" type="checkbox" />
                <span htmlFor="IT">IT</span>
              </label>
              <label>
                <input id="RI" type="checkbox" />
                <span htmlFor="RI">RI</span>
              </label>
              <label>
                <input id="RE" type="checkbox" />
                <span htmlFor="RE">RE</span>
              </label>
              <label>
                <input id="PR&MEDIA" type="checkbox" />
                <span htmlFor="PR&MEDIA">PR&MEDIA</span>
              </label>

              <label>
                <input id="PRO" type="checkbox" />
                <span htmlFor="PRO">PRO</span>
              </label>
            </div>
          </div>
          <div className="searchZone">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">search</i>

                <input
                  value="Alvin"
                  id="userSearch"
                  type="text"
                  class="validate"
                />
                <label class="active" for="userSearch">
                  Cauta
                </label>
              </div>
            </div>
          </div>
          <div className="usersList">
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
          </div>
        </div>
        <div className="mainContainer col s12 m12 l9 xl9">
          <div className="userHeaderInfo col s12">
            <div className="userInfo-name">
              <button className="btnBack" ><i class="fas fa-chevron-left"></i></button>
              <h4>Nume Prenume</h4>
              <span>
                <i class="fas fa-ellipsis-v"></i>
              </span>
            </div>
            <div className="userInfo-responses">
              <div className="response col s12 m6 l6">
                <span>Question:</span>
                <p>
                  Response Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Aperiam provident incidunt nisi ea earum illo quia atque
                  quae, autem consequuntur labore fugiat fugit similique
                  repellendus itaque pariatur dolores id officia?
                </p>
              </div>
              <div className="response col s12 m6 l6">
                <span>Question:</span>
                <p>
                  Response Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Aperiam provident incidunt nisi ea earum illo quia atque
                  quae, autem consequuntur labore fugiat fugit similique
                  repellendus itaque pariatur dolores id officia?
                </p>
              </div>
              <div className="response col s12 m6 l6">
                <span>Question:</span>
                <p>
                  Response Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Aperiam provident incidunt nisi ea earum illo quia atque
                  quae, autem consequuntur labore fugiat fugit similique
                  repellendus itaque pariatur dolores id officia?
                </p>
              </div>
              <div className="response col s12 m6 l6">
                <span>Question:</span>
                <p>
                  Response Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Aperiam provident incidunt nisi ea earum illo quia atque
                  quae, autem consequuntur labore fugiat fugit similique
                  repellendus itaque pariatur dolores id officia?
                </p>
              </div>
              <div className="response col s12 m6 l6">
                <span>Question:</span>
                <p>
                  Response Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Aperiam provident incidunt nisi ea earum illo quia atque
                  quae, autem consequuntur labore fugiat fugit similique
                  repellendus itaque pariatur dolores id officia?
                </p>
              </div>
            </div>
            <div className="comments">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
          </div>
          <div className="inputComments col s12">
            <textarea id="commentAdd" type="text" ></textarea>
            <button className="addCommentBtn">Adauga</button>
          </div>
         
        </div>
      </div>
    );
  }
}
