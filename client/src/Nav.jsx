import React from "react";
import Navbar from 'react-bulma-components/lib/components/navbar';
import './css/mystyles.css';
import './css/style.css';
import 'bulma/css/bulma.css';

class Nav extends React.Component {

    render() {
        return (
            <Navbar className="navbar is-fixed-bottom " id="nav">
                <div className="navbar-start">
                    <div className="navbar-brand image is-64x64">
                        <img
                            src="https://image.ibb.co/bxidH9/logo_small.png"
                            alt="logo"
                            className="navbar-item"
                        />
                        <p className="navbar-item" id="nav">R A D I∙I</p>
                    </div>
                </div>
                <div className="navbar-end" id="nav">
                    <div className="navbar-item has-dropdown has-dropdown-up is-hoverable">
                        <p className="navbar-item">{this.props.user}</p>
                        <div className="navbar-dropdown is-right">
                            <a role="button" className="navbar-item" onClick={this.props.openModal} id="nav">Edit Profile</a>
                            <a role="button" className="navbar-item" onClick={this.props.logout} id="nav" >Logout</a>
                        </div>
                    </div>
                </div>
            </Navbar>
        );
    }
}

export default Nav;