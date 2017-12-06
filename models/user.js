const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: 'This field is required.' },
  firstName: { type: String, required: 'This field is required.' },
  lastName: { type: String, required: 'This field is required.' },
  email: { type: String, unique: true, required: 'This field is required.' },
  image: String,
  description: String,
  address: { type: String, required: true },
  linkedIn: String,
  password: { type: String, required: 'This field is required.' },
  skills: [{ type: mongoose.Schema.ObjectId, ref: 'Skill' }],
  nonprofits: [{ type: mongoose.Schema.ObjectId, ref: 'Nonprofit' }]
  // ratings: [
  //   {
  //     skill: { type: mongoose.Schema.ObjectId, ref: 'Skill' },
  //     rating: { type: Number },
  //     createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  //     comment: { type: String, trim: true }
  //   }
  // ]
},
{
  timestamps: true
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
