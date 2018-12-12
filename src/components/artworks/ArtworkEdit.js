import React from 'react';
import axios from 'axios';
import { getToken } from '../../lib/auth';

class ArtworkEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const token = getToken();
    event.preventDefault();
    console.log('yay form submitted!!', this.state);
    axios.put(`/api/artwork/${this.props.match.params.id}`, this.state, {
      headers: { Authorization: `Bearer ${token }`}
    })
      .then(result => {
        console.log(result);
        this.props.history.push(`/artwork/${result.data._id}`);
      });
  }
  handleChange({ target: {name, value }}) {
    console.log('event.target.name is', event.target.name, this.state);
    this.setState({ [name]: value });
  }
  render() {
    return (
      <section className="hero is-light-title is-fullheight">
        <div className="hero-body">
          <div className="card is-shady container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-black">Edit your artwork</h3>
              <img src="../../assets/logo.png"/>
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <div className="control">
                    <label>Name</label>
                    <input onChange={this.handleChange}
                      value={this.state.name || ''}
                      name="name"
                      placeholder="name"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label>Price</label>
                    <input onChange={this.handleChange}
                      value={this.state.price || ''}
                      name="price"
                      placeholder="price"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label>Description</label>
                    <input onChange={this.handleChange}
                      value={this.state.description || ''}
                      name="description"
                      placeholder="description"
                    />
                  </div>
                </div>

                <button id="edit-button" className="button is-block is-info is-small is-fullwidth">EDIT</button>
              </form>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ArtworkEdit;
