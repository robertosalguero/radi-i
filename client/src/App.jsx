import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import Modal from 'react-modal';
import Map from './Map';
import Nav from './Nav';
import Auth from './Auth';
import UpdateProfile from './UpdateProfile';
import { fetchUser, registerUser, userLogin, editUser, deleteAccount } from './Services/api';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor() {
    super();

    const token = localStorage.getItem("jwt")
    
    this.state = {
      isLoggedIn: false,
      modalIsOpen: false,
      user: token ? jwtDecode(token) : ''
    };

    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.logout = this.logout.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.delete = this.delete.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  isLoggedIn() {
    const res = !!(localStorage.getItem('jwt'));
    this.setState({
      isLoggedIn: res,
    })
    return res;
  }

  componentDidMount() {
    this.isLoggedIn()
  }
    
    login(body) {
    userLogin(body)
    .then(res => localStorage.setItem("jwt", res.jwt))
    .then(() => 
    this.setState({
      isLoggedIn: true,
      user: jwtDecode(localStorage.getItem("jwt")),
    }))
    .catch(err => console.log(err))
  }
  
  register(body) {
    registerUser(body)
    .then(() => this.login(body = { auth: { "username": body.username, "password": body.password}}))
    .catch(err => err.message)
  }
  
  logout() {
    localStorage.removeItem('jwt')
    this.setState({
      isLoggedIn: false,
    })
  }
  
  openModal() {
    fetchUser(this.state.user.id)
    .then(user => {
      this.setState({
        modalIsOpen: true,
      });
    })
  }
    updateProfile(data) {
      editUser(data)
        .then((data) => {
          console.log(data)
          this.setState({
            modalIsOpen: false,
          })
        })
        .catch(err => console.log(err))
    }

    delete() {
      const id = this.state.id
      deleteAccount(id)
      .then(res => this.setState({
        isLoggedIn: false 
      })
    )}


  

  closeModal() {
    this.setState({ modalIsOpen: false });
  }



  render() {
    if (this.state.isLoggedIn === true) {
      return (
        <div>
          <Map />
          <Modal
            ariaHideApp={false}
            style={customStyles}
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}>
            <UpdateProfile user={this.state.user} delete={this.delete} updateProfile={this.updateProfile} />
          </Modal>
          <Nav openModal={this.openModal} user={this.state.user.username} logout={this.logout} />
        </div>
      )
    }
    else {
      return (
        <Auth login={this.login} register={this.register} />
      );
    }
  }
}


export default App;