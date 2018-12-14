import React from 'react';
import axios from 'axios';

import ImageColumn from './ImageColumn';
import TextColumn from './TextColumn';

import { addItem } from '../../lib/basket';
import { getToken } from '../../lib/auth';



export default class ArtworkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    let artwork;
    axios.get(`/api/artwork/${this.props.match.params.id}`)
      .then(result => {
        artwork = result.data;
        axios
          .get('https://v3.exchangerate-api.com/bulk/1c1c8a3df8afbf9f0949eb01/GBP')
          .then(result => this.setState(
            {
              artwork: artwork,
              currency: result.data,
              selectedCurrency: 'GBP',
              totalPrice: artwork.price.toFixed(2)
            }));
      });
  }

  calculateTotal(value) {
    //find the price of the artwork
    const originalPrice = this.state.artwork.price;
    //find the exchange rate from this.state.currency
    const rate = this.state.currency.rates[value];
    // times them together and return the new total.
    return (originalPrice * rate).toFixed(2);
  }

  handleClick() {
    console.log(this.state);
    addItem(this.state.artwork, parseInt(this.state.quantity));
    this.props.history.push('/basket');
  }

  handleChange(e) {
    const { target: { value } } = e;
    console.log(value);
    const total = this.calculateTotal(value);
    this.setState({ selectedCurrency: value, totalPrice: total });
  }

  handleDelete() {
    const token = getToken();
    console.log('clicked!');
    axios.delete(`/api/artwork/${this.state.artwork._id}`, {
      headers: {Authorization: `Bearer ${token}`}
    })
      .then(() => {
        this.props.history.push('/artwork');
      });
  }

  render() {
    const artwork = this.state.artwork;
    const currency = this.state.currency;
    return (
      <section>
        {artwork
          ?
          <div>
            <div className="columns">
              <ImageColumn artwork={artwork}
              />
              <TextColumn
                totalPrice={this.state.totalPrice}
                artwork={artwork}
                handleDelete={this.handleDelete}
                selectedCurrency={this.state.selectedCurrency}
                handleClick={this.handleClick}
                calculateTotal={this.calculateTotal}
                currency={currency}
                handleChange={this.handleChange}
              />
            </div>
          </div>
          :
          <p>Please wait...</p>}


      </section>
    );
  }
}
