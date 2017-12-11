const express = require('express');
const router  = express.Router();
const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const nonprofits = require('../controllers/nonprofits');
const skills = require('../controllers/skills');
const imageUpload = require('../lib/imageUpload');
const secureRoute = require('../lib/secureRoute');


router.route('/register')
  .post(imageUpload, authentications.register);

router.route('/login')
  .post(authentications.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/nonprofits')
  .get(nonprofits.index)
  .post(secureRoute, imageUpload, nonprofits.create);

router.route('/nonprofits/:id')
  .get(nonprofits.show)
  .put(secureRoute, imageUpload, nonprofits.update)
  .delete(secureRoute, nonprofits.delete);

router.route('nonprofits/:id/support')
  .post(secureRoute, nonprofits.support)
  .delete(secureRoute, nonprofits.unsupport);

router.route('/skills')
  .get(skills.index);

module.exports = router;
