import React from 'react';

function TextColumn({ artwork }) {
  return (
    <div className="column is-6">
      <h1 className="title is-1">{artwork.name}</h1>

      <p>£{artwork.price}</p>
      <p>£{artwork.description}</p>

    </div>
  );
}

export default TextColumn;
