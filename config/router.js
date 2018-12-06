const router = require('express').Router();
const artworkController = require('../controllers/artworkController');
const authController = require('../controllers/authController');
const secureRoute = require('../lib/secureRoute');
const commentController = require('../controllers/commentController');
const purchasesController = require('../controllers/purchasesController');

//index and create route
router.route('/artwork')
  .get(artworkController.index)
  .post(artworkController.create);

//show, update and delete router
router.route('/artwork/:id')
  .get(artworkController.show)
  .put(secureRoute, artworkController.update)
  .delete(secureRoute, artworkController.delete);

//login and register
router.route('/login')
  .post(authController.login);
router.route('/register')
  .post(authController.register);

//comments
router.route('/artwork/:id/comments')
  .post(secureRoute, commentController.commentCreate);
router.route('/artwork/:id/comments/commentId')
  .delete(secureRoute, commentController.commentDelete);

//basket
router.post('/checkout', secureRoute, purchasesController.create);
router.get('/purchases', secureRoute, purchasesController.userIndex);


module.exports = router;
