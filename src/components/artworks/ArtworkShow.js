import React from 'react';
import axios from 'axios';

import ImageColumn from './ImageColumn';
import TextColumn from './TextColumn';

export default class ArtworkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/artwork/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ artwork: res.data });
        console.log('We have', this.state.artwork);
      });
  }
  handleChange(e) {
    const { target: {name, value} } = e;
    this.setState({ [name]: value });
  }
  handleDelete() {
    axios
      .delete(`/api/artwork/${this.props.match.params.id}`)
      .then(res => console.log('res', res))
      .then(() => this.props.history.push('/artwork'));
  }

  render() {
    const artwork = this.state.artwork;
    return (
      <section>
        {artwork
          ?
          <div>
            <div className="columns">
              <ImageColumn artwork={artwork} />
              <TextColumn artwork={artwork}/>
            </div>
            <hr />
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
