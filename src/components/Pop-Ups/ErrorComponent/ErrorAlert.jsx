import React from 'react'
import M from 'materialize-css';
import './ErrorAlert.scss'

export default function AlertError() {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
      })
    return(
        <div id="ErrorAlert" className="modal">
            <div className="modal-content">
                <i className="far fa-times-circle"></i>
                <p>Something went wrong...</p>
            </div>
            <div className="modal-footer">
                <button className="modal-close waves-effect waves-light btn red ">Ok</button>
            </div>
        </div>    
    )
}
