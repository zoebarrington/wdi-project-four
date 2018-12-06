import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';
import ArtworkForm from './ArtworkForm';

export default class ArtworkNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit handled', this.state);
    axios.post('/api/artwork', this.state)
      .then(() => this.props.history.push('/artwork'));
  }

  render() {
    return(
      <section>
        <h2 className="title is-2">Add your works!</h2>
        <ArtworkForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </section>
    );
  }
}
