/* global api, expect, describe, it, beforeEach */

const Artwork = require('../../models/artwork');
const userIds = [
  '5c0a5555c333a575f6c5d0aa'
];

const artworkData = [
  {
    createdBy: userIds[0],
    name: 'Ladies in Blue',
    price: 300,
    artist: 'Camilla Down',
    yearPainted: 2017,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: './assets/blueladies.jpg',
    medium: 'Watercolour',
    locationOfArtist: 'London, United Kingdom',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Love this!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }];


let artworkId;

describe('Artwork SHOW', () => {

  beforeEach(done => {
    Artwork.remove({})
      .then(() => Artwork.create(artworkData))
      .then(movie => {
        artworkId = movie._id;
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get(`/api/artwork/${artworkId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/artwork/${artworkId}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/artwork/${artworkId}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(artworkData.name);
        expect(res.body.price).to.eq(artworkData.price);
        expect(res.body.yearPainted).to.eq(artworkData.yearPainted);
        done();
      });
  });

});
