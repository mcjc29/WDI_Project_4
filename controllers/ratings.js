const User = require('../models/user');
const Rating = require('../models/rating');
const Promise = require('bluebird');
// require('../models/skill');
// require('../models/nonprofit');

function userSkillRatingCreate(req, res, next) {
  User
    .findById(req.params.id)
    .populate('skills.ratings')
    .then(user => {
      const skill = user.skills.find(skill => skill._id == req.params.skillId);
      const rating = skill.ratings.find(rating => rating.createdBy == req.currentUser.id);
      if (rating) res.status(500).json({message: 'You cannot vote twice on the same skill'});

      createRating(req, res, next);
    })
    .catch(next);
}

function createRating(req, res, next) {
  req.body.createdBy = req.currentUser.id;

  const promises = {
    rating: Rating.create(req.body).then(rating => rating),
    user: User.findById(req.params.id).then(user => user)
  };

  Promise.props(promises)
    .then(data => {
      const rating = data.rating;
      const user = data.user;

      const skill = user.skills.find(skill => skill._id == req.params.skillId);

      skill.ratings.push(rating);
      return user.save();

    })
    .then(user => res.status(200).json(user))
    .catch(next);
}

module.exports = {
  create: userSkillRatingCreate
};
