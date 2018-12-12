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
  }

  componentDidMount() {
    let artwork;
    axios.get(`/api/artwork/${this.props.match.params.id}`)
      .then(result => {
        artwork = result.data;
        axios
          .get('https://v3.exchangerate-api.com/bulk/1c1c8a3df8afbf9f0949eb01/USD')
          .then(result => this.setState({ artwork: artwork, currency: result.data }));
      });
  }
  calculateCurrency() {
    const currency = this.state.currency;
    for(let i=0; i<Object.keys(currency.rates).length; i++) {
      if(Object.keys(currency.rates)[i] === options) {
        return Object.keys(currency.values);
      } else {
        return false;
      }
    }
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
        {currency && console.log('currency isssss', Object.keys(currency.rates),Object.keys(currency.rates))};




        {artwork
          ?
          <div>
            <div className="columns">
              <ImageColumn artwork={artwork} />
              <div>
<form onSubmit={this.calculateCurrency}>
                <select name="currency" onChange={this.handleChange}>

                  {Object.keys(currency.rates) && Object.keys(currency.rates).map( options =>
                    <option value={options} key={options}>{options}</option>)}


                </select>
                </form>
              </div>
              <TextColumn artwork={artwork} handleDelete={this.handleDelete} handleClick={this.handleClick}/>
            </div>
          </div>
          :
          <p>Please wait...</p>}


      </section>
    );
  }
}
