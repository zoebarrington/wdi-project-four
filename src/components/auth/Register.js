import React from 'react';
import axios from 'axios';
import { saveToken } from '../../lib/auth';

class AuthRegister extends React.Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/register', this.state)
      .then(res => {
        saveToken(res.data.token);
      })
      .then(() => this.props.history.push('/artwork'))
      .catch(() => {
        this.props.history.replace('/login');
      });
  }

  render() {
    return (
      <section className="hero is-light-title is-fullheight">
        <div className="hero-body">
          <div className="card is-shady container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-black">Register</h3>
              <img src="../../assets/logo.png"/>
      <form onSubmit={this.handleSubmit}>

        <div className="field">
          <input
            className="input"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="bio"
            placeholder="Bio"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="profilePicture"
            placeholder="Profile Picture"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            className="input"
            name="passwordConfirmation"
            placeholder="Password confirmation"
            onChange={this.handleChange}
          />
        </div>
        <button id="edit-button" className="button is-block is-info is-small is-fullwidth">Register</button>
      </form>
      </div>
      </div>
      </div>
      </section>
    );
  }
}

export default AuthRegister;
