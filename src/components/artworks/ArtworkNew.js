import React from 'react';
import axios from 'axios';
import ArtworkForm from './ArtworkForm';
import { getToken } from '../../lib/auth';

class ArtworkNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const token = getToken();
    e.preventDefault();
    console.log('Submit handled', this.state);
    axios.post('/api/artwork', this.state, {
      headers: {Authorization: `Bearer ${token}`}
    })
      .then(() => this.props.history.push('/artwork'));
  }
  handleChange(e) {
    const { target: {name, value} } = e;
    this.setState({ [name]: value });
  }


  render() {
    return(
      <section>
        <ArtworkForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </section>
    );
  }
}

export default ArtworkNew;
