import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './css/mystyles.css';
import './css/style.css';
import Login from './AuthComponents/Login';
import Register from './AuthComponents/Register';


export default class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentView: 'Landing',
        }

        this.goToLanding = this.goToLanding.bind(this);
        this.goToRegister = this.goToRegister.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
    }

    goToLanding() {
        this.setState({
            currentView: 'Landing',
        });
    }

    goToRegister() {
        this.setState({
            currentView: 'Register',
        });
    }

    goToLogin() {
        this.setState({
            currentView: 'Login',
        });
    }

    determineWhichToRender() {
        const { currentView } = this.state;

        switch (currentView) {
            default:
            case 'Landing':
                return (
                    <div id="land-con">
                        <img id="logo" src="https://image.ibb.co/c5YtkU/logo.png" alt="logo" />
                        <h1 id="land">R A D I∙I <br /> NEW YORK </h1>
                        <ul>
                            <li><a id="abt" >&#123; about &#125;</a></li>
                            <li><a id="abt" onClick={this.goToLogin}>&#123; login &#125;</a></li>
                            <li><a id="abt" onClick={this.goToRegister}>&#123; register &#125;</a></li>
                        </ul>
                    </div>);
            case 'Login':
                return <Login goToLanding={this.goToLanding} login={this.props.login} />;
            case 'Register':
                return <Register goToLanding={this.goToLanding} register={this.props.register} />;
        }
    }

    render() {
        return (
            <div id="connie">
                {this.determineWhichToRender()}
                <div className="navbar is-fixed-bottom" id="foot">
                    <p className="navbar-item" id="note">Developed by X for General Assembly...</p>
                </div>
            </div>
        )
    }
}



