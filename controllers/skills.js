const Skill = require('../models/skill');


function skillsCreate(req, res, next) {
  const skill = req.body;
  skill.createdBy = req.user;
  Skill
    .create(skill)
    .then((skill) => res.status(201).json(skill))
    .catch(next);
}

function skillsShow(req, res, next) {
  Skill
    .findById(req.params.id)
    .exec()
    .then((skill) => {
      if(!skill) return res.notFound();
      res.json(skill);
    })
    .catch(next);
}

function skillsUpdate(req, res, next) {
  Skill
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(skill => res.status(200).json(skill))
    .catch(next);
}

function skillsDelete(req, res, next) {
  Skill
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}


module.exports = {
  create: skillsCreate,
  show: skillsShow,
  delete: skillsDelete,
  update: skillsUpdate
};
