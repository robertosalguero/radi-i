import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../css/mystyles.css';
import '../css/style.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleLogin(e) {
        e.preventDefault()
        const body = {
            "auth" : {
            username: this.state.username,
            password: this.state.password,
            }
        }
        this.props.login(body)
    }
    render() {
        return (

            <div>
            <a className="is-hoverable" id="gobaq" onClick={this.props.goToLanding}><i className="fas fa-angle-double-left fa-5x" id="baq"></i></a>
            <div id="login-form">
                <img
                    src="https://image.ibb.co/bxidH9/logo_small.png"
                    alt="logo"
                />
                <br />
                <br />
                <br />
                <form onSubmit={this.handleLogin}>
                    <input
                        name="username"
                        placeholder="username"
                        size="30"
                        onChange={this.handleChange}
                        value={this.state.username}
                        type="text" />
                    <br />
                    <input
                        name="password"
                        placeholder="password"
                        size="30"
                        onChange={this.handleChange}
                        value={this.state.password}
                        type="text"/>
                    <br />
                    <br />
                <button className="button is-warning is-normal" id="button" type="submit">
                    Login
            </button>
            </form>
            </div>
            </div>
        )
    }
}



