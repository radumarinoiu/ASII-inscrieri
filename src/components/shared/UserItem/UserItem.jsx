import React from 'react'
import "./UserItem.scss"
export default function UserItem() {
    return (
        <div className="userItem">
            <div className="avatar">
            <i class="far fa-user-circle"></i>
            </div>
            <div className="userInfo">
                <p className="name">Nume Prenume</p>
                <p className="quality">Cea mai buna calitate e asta</p>
            </div>
        </div>
    )
}
