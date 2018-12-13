import React from 'react';
import { Link } from 'react-router-dom';

function TextColumn({ artwork, handleDelete, totalPrice, selectedCurrency, handleClick, calculateCurrency, currency, handleChange }) {
  console.log('added by', artwork.createdBy);
  return (
    <div className="column is-6">
      <h1 className="title is-1">{artwork.name}</h1>

      <Link id="show-artist-name" className="profiles-link" to={`/profile/${artwork.createdBy}`}><p>{artwork.artist}</p></Link>

      <p id="show-description">This piece was created by {artwork.artist} in {artwork.yearPainted}.
        {artwork.artist} lives in {artwork.locationOfArtist} and this piece was created using {artwork.medium}.</p>
      <button onClick={ handleDelete }><i id="show-icons" className="fas fa-trash-alt"></i></button>
      <button><Link to={`/artwork/${artwork._id}/edit`}><i id="show-icons" className="fas fa-edit"></i></Link></button>

      <div className="basket-section">
        <div>
          <form onSubmit={calculateCurrency}>
            <select id="select" name="currency" onChange={handleChange}>
              {currency && Object.keys(currency.rates).map( options =>
                <option value={options} key={options}>{options}</option>)}
            </select>
          </form>
        </div>

      <p id="price">{selectedCurrency === 'GBP' ? '£' : `${selectedCurrency} `}{totalPrice}</p>
      <button className="basket-button" onClick={handleClick}>Add to basket</button>
    </div>
    </div>
  );
}

export default TextColumn;
