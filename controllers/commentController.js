const Artwork = require('../models/artwork');

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser;
  Artwork
    .findById(req.params.id)
    .populate('comments.user')
    .exec()
    .then(artwork => {
      artwork.comments.push(req.body);
      return artwork.save();
    })
    .then(artwork => res.json(artwork))
    .catch(next);
}

function commentDeleteRoute(req, res, next) {
  Artwork
    .findById(req.params.id)
    .populate('comments.user')
    .then(artwork => {
      const comment = artwork.comments.id(req.params.commentId);
      if(!comment.user._id.equals(req.currentUser._id)) {
        throw new Error('Unauthorized');
      }
      comment.remove();
      return artwork.save();
    })
    .then(artwork => res.json(artwork))
    .catch(next);
}

module.exports = {
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
};
