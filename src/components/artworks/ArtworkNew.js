import React from 'react';
import axios from 'axios';
import ArtworkForm from './ArtworkForm';

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
    return(
      <section>
        <h2 className="title is-2">Add a Artwork</h2>
        <ArtworkForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </section>
    );
  }
}

export default ArtworkNew;
