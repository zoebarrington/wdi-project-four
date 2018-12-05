const router = require('express').Router();
const artworkController = require('../controllers/artworkController');

//index and create route
router.route('/artwork')
  .get(artworkController.index)
  .post(artworkController.create);

//show, update and delete router
router.route('/artwork/:id')
  .get(artworkController.show)
  .put(artworkController.update)
  .delete(artworkController.delete);
