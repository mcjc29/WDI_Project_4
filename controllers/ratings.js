const User = require('../models/user');

function ratingCreate(req, res, next) {
  req.body.createdBy = req.currentUser;
  User
    .findById(req.params.id)
    .then(user => {
      const skill = user.skills.find(skill => skill._id.equals(req.params.skillId));
      let rating = skill.ratings.find(rating => rating.createdBy.equals(req.currentUser._id));

      if(rating) {
        rating.rating = req.body.rating;
      } else {
        rating = skill.ratings.create(req.body);
        skill.ratings.push(rating);
      }

      return user.save();
    })
    .then(user => User.populate(user, { path: 'skills.ratings skills.skill nonprofits' }))
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  create: ratingCreate
};
