const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);
const Artwork = require('../models/artwork');
const User = require('../models/user');
const Message = require('../models/message');



const userIds = [
  '5c0a5555c333a575f6c5d0aa',
  '5c0a5555c333a575f6c5d0ab',
  '5c0a5555c333a575f6c5d0ac',
  '5c0a5555c333a575f6c5d0af'
];

const userData = [{
  _id: userIds [0],
  username: 'camilladown',
  email: 'camilla@down',
  password: 'pass',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  profilePicture: 'image'
}, {
  _id: userIds [1],
  username: 'freyahollingberry',
  email: 'freya@hollingberry',
  password: 'pass',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  profilePicture: 'https://images.ecosia.org/ZvXLRNB1Xk5bWn95V8y1ZnZ6ZY4=/0x390/smart/http%3A%2F%2Fcontent.mycutegraphics.com%2Fgraphics%2Fjellybean%2Fsmiling-pink-jelly-bean.png'
}, {
  _id: userIds [2],
  username: 'claypeterson',
  email: 'clay@peterson',
  password: 'pass',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  profilePicture: 'image'
}, {
  _id: userIds [3],
  username: 'pollybaker',
  email: 'polly@baker',
  password: 'pass',
  bio: 'Polly Baker is a fine artist currently living in Madrid, Spain. She has an extremely successful line of witty cards that are typically created with watercolour and pencil.',
  profilePicture: '../assets/polly-2.jpg'
}];

const artworkData = [
  {
    createdBy: userIds[0],
    name: 'Ladies in Blue',
    price: 300,
    artist: 'Camilla Down',
    yearPainted: 2017,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'blueladies.jpg',
    medium: 'Watercolour',
    locationOfArtist: 'London, United Kingdom',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Love this!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    createdBy: userIds[3],
    name: 'Cruella at Christmas',
    price: 15,
    artist: 'Polly Baker',
    yearPainted: 2015,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'christmascruella.jpg',
    medium: 'Pencil and Watercolour',
    locationOfArtist: 'Madrid, Spain',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Unique!',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    createdBy: userIds[2],
    name: 'No Boys Allowed',
    price: 200,
    artist: 'Clay Peterson',
    yearPainted: 2016,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'noboysallowed.jpg',
    medium: 'Oil on Canvas',
    locationOfArtist: 'New York City, USA',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Simple and effective!',
      rating: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    createdBy: userIds[1],
    name: 'Era',
    price: 600,
    artist: 'Freya Hollingberry',
    yearPainted: 2014,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'Era.jpg',
    medium: 'Recycled Bottletops',
    locationOfArtist: 'Bristol, United Kingdom',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Love sustainable art!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    createdBy: userIds[1],
    name: 'Cherubs',
    price: 700,
    artist: 'Freya Hollingberry',
    yearPainted: 2015,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'cherubpink.jpg',
    medium: 'Recycled Bottletops',
    locationOfArtist: 'Bristol, United Kingdom',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Wow! So impressive!',
      rating: 4,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    createdBy: userIds[0],
    name: 'Prancing',
    price: 500,
    artist: 'Camilla Down',
    yearPainted: 2014,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'prancing.jpg',
    medium: 'Watercolour and Pencil',
    locationOfArtist: 'London, United Kingdom',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Incredible!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    createdBy: userIds[0],
    name: 'Strands',
    price: 460,
    artist: 'Freya Hollingberry',
    yearPainted: 2014,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'strands.jpg',
    medium: 'Recycled Bottletops',
    locationOfArtist: 'Bristol, United Kingdom',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Wow!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    createdBy: userIds[2],
    name: 'Crying Friend',
    price: 250,
    artist: 'Clay Petereson',
    yearPainted: 2014,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'crying.jpg',
    medium: 'Oil on Canvas',
    locationOfArtist: 'New York City, USA',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Wow!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    createdBy: userIds[3],
    name: 'Smashed Avocado',
    price: 80,
    artist: 'Polly Baker',
    yearPainted: 2013,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'avocado.jpg',
    medium: 'Watercolour',
    locationOfArtist: 'Madrid, Spain',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Wow!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    createdBy: userIds[1],
    name: 'Stars',
    price: 600,
    artist: 'Freya Hollingberry',
    yearPainted: 2013,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'stars.jpg',
    medium: 'Recycled Bottletops',
    locationOfArtist: 'Bristol, United Kingdom',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Wow!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }, {
    createdBy: userIds[1],
    name: 'Gluten-free Bread',
    price: 70,
    artist: 'Polly Baker',
    yearPainted: 2013,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/26804341_1813763841967646_3241041667162109107_n.png?_nc_cat=111&_nc_ht=scontent-lhr3-1.xx&oh=0ed3ca3b26c6645fc4f7223ad228a152&oe=5CA65596',
    medium: 'Watercolour and Pencil',
    locationOfArtist: 'Madrid, Spain',
    location: { lat: 43.6666944, lng: -79.3155959 },
    comments: [{
      title: 'Wow!',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }
];

const messageData = [
  {
    from: userIds[0],
    to: userIds[2],
    content: 'hello!'
  }, {
    from: userIds[1],
    to: userIds[3],
    content: 'hi polly!'
  }, {
    from: userIds[2],
    to: userIds[0],
    content: 'Camilla! Love your work!'
  }
];

mongoose.connect(dbURI);
Artwork.collection.drop();
User.collection.drop();
Message.collection.drop();

// Artwork.create(artworkData)
//   .then(artwork => {
//     console.log(`Created ${artwork.length} artworks!`);
//     User.create(userData)
//       .then(users => {
//         console.log(`Created ${users.length} users!`);
//         mongoose.connection.close();
//       });
//   });

Artwork.create(artworkData)
  .then(artwork => {
    console.log(`${artwork.length} artwork created`);
    return User.create(userData);
  })
  .then(users => {
    console.log(`${users.length} users created`);
    return Message.create(messageData);
  })
  .then(messages => {
    console.log(`${messages.length} messages created`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
