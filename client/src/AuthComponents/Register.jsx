import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../css/mystyles.css';
import '../css/style.css';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            avi: '',
            bio: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleRegister(e) {
        e.preventDefault()
        const body = {
            "auth" : {
            username: this.state.username,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            avi: this.state.avi,
            bio: this.state.bio,
            }
        }
        this.props.register(body)
        
    }
    render() {
        return (

            <div>
            <a className="is-hoverable" id="gobaq" onClick={this.props.goToLanding}><i className="fas fa-angle-double-left fa-5x" id="baq"></i></a>
                <div id="reg-con">
                <img src="https://image.ibb.co/c5YtkU/logo.png" alt="logo" />
                <h1 id="reg">Create An Account</h1>
                <form onSubmit={this.handleRegister} id="reg">
                <ul>
                    <li><label htmlFor="name">Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange} /></li>
                   <li> <label htmlFor="password">Password: </label>
                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} /></li>
                    <li><label htmlFor="unit">Confirm Password: </label>
                    <input
                        type="text"
                        name="password_confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange} /></li>
                    <li><label htmlFor="avi">Link a Profile Photo: </label>
                    <input
                        type="text"
                        name="avi"
                        value={this.state.avi}
                        onChange={this.handleChange} /></li>
                    <li><label htmlFor="bio">Tell Us About Yourself: </label>
                    <textarea
                        type="text"
                        name="bio"
                        value={this.state.bio}
                        onChange={this.handleChange} /></li>
                    </ul>
                    <button className="button is-warning is-large" type="submit" onClick={this.handleRegister} value="Register">Register</button>
                </form>
                </div>
                </div>
        )
    }
}



