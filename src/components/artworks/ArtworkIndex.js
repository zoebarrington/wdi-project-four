import React from 'react';
import axios from 'axios';
import ArtworkBox from './ArtworkBox';

class ArtworkIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
  componentDidMount() {
    axios.get('/api/artwork')
      .then(result => this.setState({ artworks: result.data, filteredArtworks: result.data }));
  }
  render() {
    return (
      <main>


        <section className="index-container columns is-multiline">
          <div className="search-bar column is-12">
            <form>
              <input
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                className="form-input subtitle is-size-8"
              />
            </form>
          </div>


          {this.state.filteredArtworks &&
          this.state.filteredArtworks.map(
            filteredArtwork => <ArtworkBox key = {filteredArtwork._id} artwork={filteredArtwork}/>
          )}


        </section>
      </main>
    );
  }
}

export default ArtworkIndex;
