import React from 'react';
import axios from 'axios';

class ArtworksShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/artwork/${this.props.match.params.id}`)
      .then(result => this.setState({ artwork: result.data }));
  }

  render() {
    const artwork = this.state.artwork;
    return (
      <main>
        {artwork
          ?
          <section>
            <h1>{artwork.name}</h1>
            <img src={artwork.image} />

          </section>
          :
          <p>Loading...</p>
        }
      </main>
    );
  }
}

export default ArtworksShow;
