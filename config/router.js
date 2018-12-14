const router = require('express').Router();
const rp = require('request-promise');
const { exchangeRateApiKey } = require('./environment');
const artworkController = require('../controllers/artworkController');
const authController = require('../controllers/authController');
const secureRoute = require('../lib/secureRoute');
const commentController = require('../controllers/commentController');
const purchasesController = require('../controllers/purchasesController');
const userController = require('../controllers/userController');
const messageController = require('../controllers/messageController');

//index and create route
router.route('/artwork')
  .get(artworkController.index)
  .post(secureRoute, artworkController.create);

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

//Profile
router.route('/profile/:id')
  .get(secureRoute, userController.show)
  .put(secureRoute, userController.updateFollowers);

//messages
router.route('/messages')
  .get( secureRoute, messageController.index)
  .post(secureRoute, messageController.create);

router.route('/messages/:id')
  .delete(secureRoute, messageController.delete);

router.route('/currencies')
  .get((req, res, next) => {
    rp({
      method: 'GET',
      json: true,
      url: `https://v3.exchangerate-api.com/bulk/${exchangeRateApiKey}/GBP`
    })
      .then(result => res.json(result))
      .catch(next);
  });
module.exports = router;
