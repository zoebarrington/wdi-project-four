import React from 'react';
import axios from 'axios';

class ArtworkEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('yay form submitted!!', this.state);
    axios.put(`/api/artwork/${this.props.match.params.id}`, this.state)
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
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input onChange={this.handleChange}
            value={this.state.name || ''}
            name="name"
          />
          <label>Price</label>
          <input onChange={this.handleChange}
            value={this.state.price || ''}
            name="price"
          />
          <label>Description</label>
          <input onChange={this.handleChange}
            value={this.state.description || ''}
            name="description"
          />
          <button>Edit da art!</button>
        </form>
      </section>
    );
  }
}

export default ArtworkEdit;
