const mongoose = require('mongoose');
const env = require('../config/environemnt');
mongoose.connect(env.dbUri);
const Artwork = require('../models/artwork');

const artworkData = [
  {
    name: 'Ladies in Blue',
    price: 300,
    artist: 'Camilla Down',
    yearPainted: 2017,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: './images/blueladies.jpg',
    medium: 'Watercolour',
    locationOfArtist: 'London, United Kingdom',
    comments: [{
      title: 'Love this!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    name: 'Cruella at Christmas',
    price: 15,
    artist: 'Polly Baker',
    yearPainted: 2015,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: './images/christmascruella.jpg',
    medium: 'Pencil and Watercolour',
    locationOfArtist: 'Madrid, Spain',
    comments: [{
      title: 'Unique!',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    name: 'No Boys Allowed',
    price: 200,
    artist: 'Clay Peterson',
    yearPainted: 2016,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: './images/noboysallowed.jpg',
    medium: 'Oil on Canvas',
    locationOfArtist: 'New York City, USA',
    comments: [{
      title:
    }]
  }, {
    name:
    price:
    artist:
    yearPainted:
    description:
    image:
    medium:
    locationOfArtist:
    comments: [{

    }]
  }
];

Artwork.collection.drop();

Artwork.create(artworkData)
  .then(artwork => {
    console.log(`Created ${artwork.length} artworks!`);
    mongoose.collection.close();
  })
