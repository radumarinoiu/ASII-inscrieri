import React, { Component } from 'react'
import styles from './AdminLogin.module.scss'

export default class AdminLogin extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            auth: false
          }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(e){
        e.preventDefault();
        if (this.state.email === "admin@asii.ro" && this.state.password === "asii2019"){
            this.setState({
                auth: true
            });
            console.log(this.state.auth);
            window.location.replace('/dashboard');
            
        } else alert("try again")
    }
    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value} )
      }
    render() {
        
        return (
            <div>
                <div className={styles.container}>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email
                            <input 
                                type="email" 
                                placeholder="youareawsome@gmail.com" 
                                name = "email"
                                onChange={event => this.handleChange(event)}
                                required>
                            </input>
                        </label>
                        <label>Password
                            <input 
                                type='password' 
                                placeholder="*********" 
                                name='password' 
                                minLength='8' 
                                maxLength='20' 
                                onChange={event => this.handleChange(event)} 
                                required>
                            </input>
                        </label>
                        <input type = 'submit'className ={styles.btn}></input>
                    </form>
                </div>
            </div>
        )
    }
}
