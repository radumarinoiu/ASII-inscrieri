import React, { Component } from 'react'
import styles from './AdminLogin.module.scss'
import AuthService from '../AuthService/authService';

export default class AdminLogin extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            auth: false
          }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/dashboard');
    }

    handleFormSubmit(e){
        e.preventDefault();
        this.Auth.login(this.state.email, this.state.password)
            .then(res =>{
                this.setState({
                    auth: true
                });
            })
            .catch(err =>{
                alert(err);
            })
    }


    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value} )
    }
    
    render() {
        
        return (
            <div>
                <div className={styles.container}>
                    <form onSubmit={this.handleFormSubmit}>
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
