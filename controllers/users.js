const User = require('../models/user');
// require('../models/skill');
// require('../models/nonprofit');

function usersIndex(req, res, next) {
  User
    .find()
    .populate('skills.skill skills.ratings nonprofits')
    .exec()
    .then(users => res.status(200).json(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('skills.skill skills.ratings nonprofits')
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
