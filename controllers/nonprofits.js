const Nonprofit = require('../models/nonprofit');

function nonprofitsIndex(req, res, next) {
  Nonprofit
    .find()
    .exec()
    .then((nonprofit) => res.status(200).json(nonprofit))
    .catch(next);
}

function nonprofitsCreate(req, res, next) {
  if (req.file) req.body.nonprofitNotes = req.file;

  Nonprofit
    .create(req.body)
    .then((nonprofit) => res.status(201).json(nonprofit))
    .catch(next);
}

function nonprofitsShow(req, res, next) {

  Nonprofit
    .findById(req.params.id)
    .exec()
    .then((nonprofit) => {
      if(!nonprofit) return res.notFound();
      res.json(nonprofit);
    })
    .catch(next);
}

function nonprofitsUpdate(req, res, next) {

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
      nonprofit.supporters.addToSet(req.user._id);
      return nonprofit.save();
    })
    .then(nonprofit => {
      req.nonprofit = nonprofit;
      req.user.nonprofits.addToSet(nonprofit._id);
      return req.user.save();
    })
    .then(() => res.status(200).json(req.nonprofit))
    .catch(next);
}

// DELETE nonprofits/:id/support
function nonprofitsUnsupport(req, res, next) {
  Nonprofit
    .findById(req.params.id)
    .exec()
    .then(nonprofit => {
      nonprofit.supporters.pull(req.user._id);
      return nonprofit.save();
    })
    .then(nonprofit => {
      req.nonprofit = nonprofit;
      req.user.nonprofits.pull(nonprofit._id);
      return req.user.save();
    })
    .then(() => res.status(200).json(req.nonprofit))
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
