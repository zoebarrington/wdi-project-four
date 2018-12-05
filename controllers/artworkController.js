const Artwork = require('../models/artwork');

//index route
function indexRoute(req, res, next) {
  Artwork.find().then(artworks => res.json(artworks))
    .catch(next);
}

//show route
function showRoute(req, res, next) {
  Artwork.findById(req.params.id)
    .then(artwork => res.json(artwork))
    .catch(next);
}


//create route
function createRoute(req, res, next) {
  Artwork.create(req.body)
    .then(artwork => res.json(artwork))
    .catch(next);
}

//update route
function updateRoute(req, res, next) {
  Artwork.findById(req.params.id)
    .then(artwork => artwork.set(req.body))
    .then(artwork => artwork.save())
    .then(artwork => res.json(artwork))
    .catch(next);
}

//delete route
function deleteRoute(req, res, next) {
  Artwork.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
