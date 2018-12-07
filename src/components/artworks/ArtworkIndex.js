import React from 'react';
import axios from 'axios';
import ArtworkBox from './ArtworkBox';

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
        <h1 className="title">Gallery</h1>

        <div className="genres">
        </div>

        <div className="index-container columns is-4">
          {this.state.artworks
            ?
            this.state.artworks.map(artwork => <ArtworkBox key={artwork._id} artwork={artwork}/>)
            :
            <p>Loading...</p>
          }
        </div>

        <div className="external-api">
        </div>
      </main>
    );
  }
}

export default ArtworkIndex;
