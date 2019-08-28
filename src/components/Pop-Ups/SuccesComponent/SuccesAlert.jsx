import React from 'react'
import M from 'materialize-css';
import './SuccesAlert.scss'

export default function AlertSucces() {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
      })
    return(
        <div id="SuccesAlert" className="modal">
            <div className="modal-content">
                <i className="far fa-check-circle"></i>
                <p>Good job!</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-light btn green">Ok</a>
            </div>
        </div>
    )
}
