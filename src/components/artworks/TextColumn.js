import React from 'react';
import { Link } from 'react-router-dom';


function TextColumn({ artwork, handleDelete }) {
  return (
    <div className="column is-6">
      <h1 className="title is-1">{artwork.name}</h1>

      <p>£{artwork.price}</p>
      <p>£{artwork.description}</p>
      <button onClick={ handleDelete }>Delete</button>
      <button><Link to={`/artwork/${artwork._id}/edit`}>Edit da art!</Link></button>

    </div>
  );
}

export default TextColumn;
