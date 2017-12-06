const mongoose = require('mongoose');

const nonprofitSchema = mongoose.Schema({
  name: { type: String, required: true },
  charitableInterests: { type: Array, required: true },
  registration: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  address: { type: String, required: true }
},
{
  timestamps: true
});

module.exports = mongoose.model('Nonprofit', nonprofitSchema);
