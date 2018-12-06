import React from 'react';
import axios from 'axios';

import ImageColumn from './ImageColumn';
import TextColumn from './TextColumn';

import { addItem } from '../../lib/basket';


export default class ArtworkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/artwork/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ artwork: res.data });
        console.log('We have', this.state.artwork);
      });
  }
  handleClick() {
    console.log(this.state);
    addItem(this.state.artwork, parseInt(this.state.quantity));
    this.props.history.push('/basket');
  }
  handleChange(e) {
    const { target: {name, value} } = e;
    this.setState({ [name]: value });
  }
  handleDelete() {
    console.log('clicked!');
    axios.delete(`/api/artwork/${this.state.artwork._id}`)
      .then(() => {
        this.props.history.push('/artwork');
      });
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
              <TextColumn artwork={artwork} handleDelete={this.handleDelete}/>
            </div>
            <hr />
            <div className="columns">
              <div className="field column is-8">
                <label htmlFor="quantity" className="label">Quantity</label>
                <input className="input" type="number" name="quantity"
                  value={this.state.quantity || 0} onChange={this.handleChange}/>
              </div>
              <div className="column is-4">
                <button className="button" onClick={this.handleClick}>Add to basket</button>
              </div>
            </div>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
