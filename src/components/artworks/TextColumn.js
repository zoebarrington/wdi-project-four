import React from 'react';
import { handleDelete } from './ArtworkShow';

function TextColumn({ artwork }) {
  return (
    <div className="column is-6">
      <h1 className="title is-1">{artwork.name}</h1>

      <p>£{artwork.price}</p>
      <p>£{artwork.description}</p>
      <button onClick={ handleDelete }>Delete</button>
      <button>Edit</button>

    </div>
  );
}

export default TextColumn;
