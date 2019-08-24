import React, { Component } from "react";
import "./CustomSelect.scss"
export default class CustomSelect extends Component {
  render() {
    const { label } = this.props;
    return (
      <div class="box col s12 m12 l12 xl12">
          <label htmlFor="">{label}</label>
        <select>
          <option value="">Selecteaza departament</option>
          <option className="aa" value="it">IT</option>
          <option value="ri">Relatii Interne</option>
          <option value="re">Relatii Externe</option>
          <option value="pr">PR&Media</option>
          <option value="pro">Proiecte</option>
        </select>
      </div>
    );
  }
}
