import React from 'react';
import { Link } from 'react-router-dom';

function ArtworkBox({ artwork }) {
  return (
    <Link className="column is-4" to={`/artwork/${artwork._id}`}>
      <article className="artwork-box">
        <div className="index-images" style={{ backgroundImage: `url('/assets/${artwork.image}')` }}></div>
        <hr />
        <h3 id="image-name">{artwork.name}</h3>
      </article>
    </Link>
  );
}

export default ArtworkBox;
