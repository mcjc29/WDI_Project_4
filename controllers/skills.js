const Skill = require('../models/skill');

function skillsIndex(req, res, next) {
  Skill
    .find()
    .exec()
    .then(skills => res.status(200).json(skills))
    .catch(next);
}

module.exports = {
  index: skillsIndex
};
