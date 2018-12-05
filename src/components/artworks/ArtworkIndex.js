import React from 'react';
import axios from 'axios';
// import ArtworkBox from './ArtworkBox';

class ArtworkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios.get('/api/artwork')
      .then(result => this.setState({ artworks: result.data }));
  }
  render() {
    return (
      <main>
        <h1>Hello World</h1>
      </main>
    );
  }
}

export default ArtworkIndex;
