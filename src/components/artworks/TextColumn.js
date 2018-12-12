import React from 'react';
import { Link } from 'react-router-dom';

function TextColumn({ artwork, handleDelete, handleClick, totalPrice, selectedCurrency }) {
  console.log('added by', artwork.createdBy);
  return (
    <div className="column is-6">
      <h1 className="title is-1">{artwork.name}</h1>

      <Link className="profiles-link" to={`/profile/${artwork.createdBy}`}><p>{artwork.artist}</p></Link>

      <p>{artwork.description}</p>
      <button onClick={ handleDelete }><i className="fas fa-trash-alt"></i></button>
      <button><Link to={`/artwork/${artwork._id}/edit`}><i className="fas fa-edit"></i></Link></button>
      <div className="basket-section">
        <p>{selectedCurrency === 'GBP' ? '£' : `${selectedCurrency} `}{totalPrice}</p>
        <button className="button" onClick={handleClick}>Add to basket</button>
      </div>
    </div>
  );
}

export default TextColumn;
