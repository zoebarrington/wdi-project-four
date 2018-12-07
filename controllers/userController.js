const User = require('../models/user');

function profileShowRoute(req, res, next) {
  User.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(next);
}

module.exports = {
  show: profileShowRoute
};
