const router = require('express').Router();
const artworkController = require('../controllers/artworkController');
const authController = require('../controllers/authController');

//index and create route
router.route('/artwork')
  .get(artworkController.index)
  .post(artworkController.create);

//show, update and delete router
router.route('/artwork/:id')
  .get(artworkController.show)
  .put(artworkController.update)
  .delete(artworkController.delete);

//login and register
router.route('/login')
  .post(authController.login);
router.route('/register')
  .post(authController.register);

module.exports = router;
