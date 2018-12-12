import React from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { Link } from 'react-router-dom';

const ArtworkMap = ({ userPosition, artworks }) => {
  console.log(artworks);
  return (
    <div id='map-id'>
      <Map center={userPosition || artworks[0].location} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {userPosition && <Marker position={userPosition}>
          <Popup>
            You!
          </Popup>
        </Marker>}
        {artworks && artworks.map(artwork =>
          <Marker key={artwork._id} position={[artwork.location.lat, artwork.location.lng]}>
            <Popup>
              <Link to={`/artworks/${artwork._id}`}>
                {artwork.name}
              </Link>
            </Popup>
          </Marker>
        )}
      </Map>
    </div>
  );
};




export default ArtworkMap;
