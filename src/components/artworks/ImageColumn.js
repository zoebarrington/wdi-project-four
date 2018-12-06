import React from 'react';

function ImageColumn({ artwork }) {
  return (
    <div className="column is-6">
      <img src={artwork.image} alt={artwork.name}/>
    </div>
  );
}

export default ImageColumn;
