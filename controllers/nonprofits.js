const Nonprofit = require('../models/nonprofit');
require('../models/skill');
require('../models/user');

function nonprofitsIndex(req, res, next) {
  Nonprofit
    .find()
    .populate('skills')
    .exec()
    .then((nonprofit) => res.status(200).json(nonprofit))
    .catch(next);
}

function nonprofitsCreate(req, res, next) {
  // if (req.file) req.body.nonprofitNotes = req.file;
  if(req.file) req.body.image = req.file.filename;
  Nonprofit
    .create(req.body)
    .then((nonprofit) => res.status(201).json(nonprofit))
    .catch(next);
}

function nonprofitsShow(req, res, next) {

  Nonprofit
    .findById(req.params.id)
    .populate('skills supporters')
    .exec()
    .then((nonprofit) => {
      if(!nonprofit) return res.notFound();
      res.json(nonprofit);
    })
    .catch(next);
}

function nonprofitsUpdate(req, res, next) {
  if(req.file) req.body.image = req.file.filename;

  Nonprofit
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(nonprofit => res.status(200).json(nonprofit))
    .catch(next);
}

function nonprofitsDelete(req, res, next) {
  Nonprofit
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}

// POST nonprofits/:id/support
function nonprofitsSupport(req, res, next) {
  Nonprofit
    .findById(req.params.id)
    .exec()
    .then(nonprofit => {
      nonprofit.supporters.addToSet(req.currentUser._id);
      return nonprofit.save();
    })
    .then(nonprofit => {
      req.currentUser.nonprofits.addToSet(nonprofit._id);
      return req.currentUser.save();
    })
    .then(user => {
      return res.status(200).json(user);
    })
    .catch(next);
}

// DELETE nonprofits/:id/support
function nonprofitsUnsupport(req, res, next) {
  Nonprofit
    .findById(req.params.id)
    .exec()
    .then(nonprofit => {
      nonprofit.supporters.pull(req.currentUser._id);
      return nonprofit.save();
    })
    .then(nonprofit => {
      req.currentUser.nonprofits.pull(nonprofit._id);
      return req.currentUser.save();
    })
    .then(user => {
      return res.status(200).json(user);
    })
    .catch(next);
}

module.exports = {
  index: nonprofitsIndex,
  create: nonprofitsCreate,
  show: nonprofitsShow,
  delete: nonprofitsDelete,
  update: nonprofitsUpdate,
  support: nonprofitsSupport,
  unsupport: nonprofitsUnsupport
};
