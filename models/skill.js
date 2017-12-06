const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  // createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  // sector: { type: Array, required: true },
  // skill: { type: Array, required: true },
  // deliverTraining: { type: Boolean, required: true },
  // mentorship: { type: Boolean, required: true }
  name: { type: String, trim: true },
  sector: { type: String, trim: true }
},
{
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);
