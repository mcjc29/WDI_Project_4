const express = require('express');
const router  = express.Router();
const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const nonprofits = require('../controllers/nonprofits');
const skills = require('../controllers/skills');

router.route('/register')
  .post(authentications.register);

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
  .post(nonprofits.create);

router.route('/nonprofits/:id')
  .get(nonprofits.show)
  .put(nonprofits.update)
  .delete(nonprofits.delete);

router.route('nonprofits/:id/support')
  .post(nonprofits.support)
  .delete(nonprofits.unsupport);

router.route('/skills')
    .get(skills.index)
module.exports = router;
