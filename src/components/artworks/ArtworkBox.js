import React from 'react';
import { Link } from 'react-router-dom';

function ArtworkBox({ artwork }) {
  return (
    <Link to={`/artworks/${artwork._id}`}>
      <article className="artwork-box">
        <img src={artwork.image} />
        <hr />
        <h3>{artwork.name}</h3>
      </article>
    </Link>
  );
}

export default ArtworkBox;
