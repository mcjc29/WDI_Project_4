const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  rating: Number,
  comment: String
},
{
  timestamps: true
});

module.exports = mongoose.model('Rating', ratingSchema);
