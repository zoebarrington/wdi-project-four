import React from 'react';

function ImageColumn({ artwork }) {
  return (
    <div className="column is-6">
      <div className="show-images" style={{ backgroundImage: `url('/assets/${artwork.image}')` }}></div>
    </div>
  );
}

export default ImageColumn;
