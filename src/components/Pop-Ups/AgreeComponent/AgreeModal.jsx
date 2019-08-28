import React, { Component } from 'react'
import './AgreeModal.scss'
export default class AgreeModal extends Component {
    render() {
        const {onCancel , onSubmit} = this.props
        return (
                <div id="Agreemodal" className="modal">
                    <div className="modal-content">
                    <h1>Esti sigur ca vrei sa modifici?</h1>
                    </div>
                    <div className="modal-footer">
                        <button onClick={onCancel} className ="modal-close waves-effect waves-red btn-flat">Cancel</button>
                        <button onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat">Ok</button>
                    </div>
                </div>
        )
    }
}
