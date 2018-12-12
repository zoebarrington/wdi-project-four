/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const { secret } = require('../../config/environment');

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

let token;
let artworkId;


describe('Artwork DELETE', () => {

  beforeEach(done => {
    Artwork.remove({})
      .then(() => Artwork.create(artworkData))
      .then(artwork => {
        artworkId = artwork._id;
      })
      .then(() => User.remove({}))
      .then(() => User.create({
        email: 'test',
        username: 'test',
        password: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });
  it('should return a 401 response without a token', done => {
    api.delete(`/api/artwork/${artworkId}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 204 response', done => {
    api.delete(`/api/artwork/${artworkId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(artworkData)
      .end((err, res) => {
        expect(res.status).to.eq(204);
        done();
      });
  });
});
