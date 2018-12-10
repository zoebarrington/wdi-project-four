const Message = require('../models/message');

function indexRoute(req, res, next) {
  console.log('here is my gym card its me dave!', req.currentUser._id);
  Message.find({ $or: [{ from: req.currentUser._id }, { to: req.currentUser._id }] })
    .populate('from to', 'username image')
    .sort('createdAt')
    .then(messages => res.json(messages))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.from = req.currentUser._id;
  console.log('at this point req.body should be ready', req.body);
  Message.create(req.body)
    .then(message => Message.populate(message, 'from to'))
    .then(message => res.json(message))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Message.findOneAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  delete: deleteRoute
};
