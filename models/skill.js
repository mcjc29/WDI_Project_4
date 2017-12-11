const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({

  name: { type: String, trim: true }
  // sector: { type: String, trim: true }
},
{
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);
