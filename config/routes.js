const express = require('express');
const router  = express.Router();
const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const nonprofits = require('../controllers/nonprofits');
const skills = require('../controllers/skills');
const imageUpload = require('../lib/imageUpload');


router.route('/register')
  .post(imageUpload, authentications.register);

router.route('/login')
  .post(authentications.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/nonprofits')
  .get(nonprofits.index)
  .post(imageUpload, nonprofits.create);

router.route('/nonprofits/:id')
  .get(nonprofits.show)
  .put(imageUpload, nonprofits.update)
  .delete(nonprofits.delete);

router.route('nonprofits/:id/support')
  .post(nonprofits.support)
  .delete(nonprofits.unsupport);

router.route('/skills')
  .get(skills.index);

module.exports = router;
