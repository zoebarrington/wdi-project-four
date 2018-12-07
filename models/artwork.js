const mongoose = require('mongoose');

const artworkSchema = mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  name: String,
  price: Number,
  artist: String,
  yearPainted: String,
  description: String,
  image: String,
  medium: String,
  locationOfArtist: String,
  comments: [{
    title: String,
    rating: Number,
    content: String
  }]
});

const artworkModel = mongoose.model('Artwork', artworkSchema);
module.exports = artworkModel;
