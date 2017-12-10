const User = require('../models/user');

function usersIndex(req, res, next) {
  User.find()
    .exec()
    .then(users => res.status(200).json(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(next);
}

function usersUpdate(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(user => res.status(200).json(user))
    .catch(next);
}

function usersDelete(req, res, next) {
  User.findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
