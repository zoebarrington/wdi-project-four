const User = require('../models/user');

function profileShowRoute(req, res, next) {
  User.findById(req.params.id)
    .populate('artworkAdded')
    .select('-password')
    .then(profile => res.json(profile))
    .catch(next);
}

function updateProfileRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}



module.exports = {
  show: profileShowRoute,
  updateFollowers: updateProfileRoute
};
