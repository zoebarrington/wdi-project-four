import React from 'react';
import { Link } from 'react-router-dom';

function TextColumn({ artwork, handleDelete, handleClick }) {
  return (
    <div className="column is-6">
      <h1 className="title is-1">{artwork.name}</h1>
      <p>{artwork.artist}</p>
      <p>{artwork.description}</p>
      <button onClick={ handleDelete }>DELETE</button>
      <button><Link to={`/artwork/${artwork._id}/edit`}>EDIT</Link></button>
      <div className="basket-section">
        <p>£{artwork.price}</p>
        <button className="button" onClick={handleClick}>Add to basket</button>
      </div>
    </div>
  );
}

export default TextColumn;
