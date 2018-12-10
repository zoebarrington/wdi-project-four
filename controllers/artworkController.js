const Artwork = require('../models/artwork');

//index route
function indexRoute(req, res, next) {
  Artwork.find().then(artworks => res.json(artworks))
    .catch(next);
}

//show route
function showRoute(req, res, next) {
  Artwork.findById(req.params.id)
    .populate('createdBy name.createdBy')
    .then(artwork => res.json(artwork))
    .catch(next);
}


//create route
function createRoute(req, res, next) {
  req.body.createdBy = req.currentUser._id;
  Artwork.create(req.body)
    .then(artwork => res.json(artwork))
    .catch(next);
}

//update route
function updateRoute(req, res, next) {
  Artwork.findById(req.params.id)
    .exec()
    // .then(artwork => artwork.set(req.body))

    .then(artwork => {
      Object.assign(artwork, req.body);
      return artwork.save();
    })
    .then(artwork => res.json(artwork))
    .catch(next);
}

//delete route
function deleteRoute(req, res, next) {
  Artwork.findByIdAndDelete(req.params.id)
    .exec()
    .then(artwork => artwork.remove())
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
