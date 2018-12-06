import React from 'react';
import axios from 'axios';

class ArtworkNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit handled', this.state);
    axios.post('/api/artwork', this.state)
      .then(() => this.props.history.push('/artwork'));
  }
  handleChange(e) {
    const { target: {name, value} } = e;
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
          <label>Artist</label>
          <input onChange={this.handleChange}
            value={this.state.artist || ''}
            name="artist"
          />
          <button>Add a work of art</button>
        </form>
      </section>
    );
  }
}

export default ArtworkNew;
