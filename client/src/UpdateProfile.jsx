import React, { Component } from 'react';

class UpdateProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.user.username,
            avi: this.props.user.avi ? this.props.user.avi : ' ',
            bio: this.props.user.bio ? this.props.user.bio : ' ',
            id: this.props.user.id,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        const data = {
            "auth": {
            username: this.state.username,
            avi: this.state.avi,
            bio: this.state.bio,
            id: this.state.id,
            }
        }
        this.props.updateProfile(data)
    }

    render() {
        return (
            <div className="modal-content">
                <h2>Update Profile</h2>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange} />
                    <br />
                    <input
                        type="hidden"
                        name="id"
                        value={this.state.id} />
                    <label htmlFor="avi">Avi:</label>
                    <input
                        type="text"
                        name="avi"
                        value={this.state.avi}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor="bio">Bio:</label>
                    <input
                        type="text"
                        name="bio"
                        value={this.state.bio}
                        onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Update Profile" />
                </form>
                <button onClick={this.props.delete} value="Delete Account"></button>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>

        );
    }
}

export default UpdateProfile;
