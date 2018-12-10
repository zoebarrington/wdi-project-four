import React from 'react';
import axios from 'axios';
import ArtworkBox from './ArtworkBox';
import ArtworkMap from '../common/Map';

class ArtworkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artworks: null,
      userPosition: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getArtworks = this.getArtworks.bind(this);
  }
  handleInputChange() {
    this.setState({
      query: this.search.value});
      let filteredArtworks = this.state.filteredArtworks;
      const artworks = this.state.artworks;
      console.log('artworks', artworks);
      const query = this.state.query;
      filteredArtworks = artworks.filter(artwork =>
        artwork.name.toLowerCase().startsWith(query.toLowerCase()) ||
        artwork.artist.toLowerCase().startsWith(query.toLowerCase())
      );
      console.log('state ====>', this.state);
      this.setState({ filteredArtworks: filteredArtworks });
    }
    getLocation(pos) {
      this.setState({ userPosition: [pos.coords.latitude, pos.coords.longitude]}, () => {
        this.getArtworks();
      })
    }
    getArtworks() {
      axios.get('/api/artworks')
      .then(res => this.setState({ artworks: res.data }));
    }
    componentDidMount() {
      axios.get('/api/artwork')
      .then(result => this.setState({ artworks: result.data, filteredArtworks: result.data }));
      navigator.geolocation.getCurrentPosition(this.getLocation, this.getArtworks);
      }
    render() {
      return (
        <main>
        <div className="map">
        {!this.state.userPosition && !this.state.artworks
          ?
          <p>Loading map...</p>
          :
          <ArtworkMap
          userPosition={this.state.userPosition}
          artworks={this.state.artworks} />
        }
        </div>


        <section className="index-container columns">
        <div className="search-bar column is-3">
        <form>
        <input
        placeholder="Search for..."
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        className="form-input subtitle is-size-6"
        />
        </form>

        <div className="centered-container">
        <hr/>
        <div>
        {this.state.query === ''
        ?
        <h1 className="search-title is-size-4">All Artworks</h1>
        :
        <h1 className="search-title is-size-4">Search Results</h1>}
        </div>
        <div>
        {this.state.filteredArtworks &&
          this.state.filteredArtworks.map(
            filteredArtwork => <ArtworkBox key = {filteredArtwork._id} artwork={filteredArtwork}/>
          )}
          </div>
          </div>
          </div>

          <div className="artwork-index column is-8">
          <h1 className="title">Gallery</h1>
          <div className="index columns is-multiline is-4">
          {this.state.artworks
            ?
            this.state.artworks.map(artwork => <ArtworkBox key={artwork._id} artwork={artwork}/>)
            :
            <p>Loading...</p>
          }
          </div>
          </div>

          <div className="external-api column is-3">
          </div>

          </section>
          </main>
        );
      }
    }

    export default ArtworkIndex;
