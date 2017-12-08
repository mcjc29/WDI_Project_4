const mongoose = require('mongoose');

const nonprofitSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: { type: String, trim: true },
  registration: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  address: { type: String, required: true },
  lat: Number,
  lng: Number,
  skills: [{ type: mongoose.Schema.ObjectId, ref: 'Skill' }],
  supporters: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
},
{
  timestamps: true
});

module.exports = mongoose.model('Nonprofit', nonprofitSchema);
