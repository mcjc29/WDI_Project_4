const User = require('../models/user');

function ratingCreate(req, res, next) {
  req.body.createdBy = req.currentUser;
  User
    .findById(req.params.id)
    .populate('skills.ratings')
    .then(user => {
      const skill = user.skills.find(skill => skill._id.equals(req.params.skillId));
      const userHasRated = !!skill.ratings.some(rating => rating.createdBy.equals(req.currentUser.id));
      if (userHasRated) return res.status(500).json({message: 'You cannot vote twice on the same skill'});

      const rating = skill.ratings.create(req.body);
      skill.ratings.push(rating);

      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  create: ratingCreate
};
