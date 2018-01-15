const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3 = require('../lib/s3');

const skillUserSchema = new mongoose.Schema({
  skill: { type: mongoose.Schema.ObjectId, ref: 'Skill' },
  ratings: [{
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    rating: Number,
    comment: String
  }]
});

skillUserSchema
  .virtual('averageRatings')
  .get(function calculateAvg() {
    const sum = this.ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return Number((sum / this.ratings.length).toFixed(1));
  });

const userSchema = new mongoose.Schema({
  username: { type: String, required: 'This field is required.' },
  firstName: { type: String, required: 'This field is required.' },
  lastName: { type: String, required: 'This field is required.' },
  email: { type: String, unique: true, required: 'This field is required.' },
  image: String,
  description: String,
  address: { type: String, required: true },
  location: { lat: Number, lng: Number },
  linkedIn: String,
  password: { type: String, required: 'This field is required.' },
  skills: [ skillUserSchema ],
  nonprofits: [{ type: mongoose.Schema.ObjectId, ref: 'Nonprofit' }]
}, {
  timestamps: true
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(this.isNew) {
    if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
      return this.invalidate('passwordConfirmation', 'Passwords do not match.');
    }
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


userSchema
  .path('image')
  .set(function getPreviousImage(image) {
    this._image = this.image;
    return image;
  });

userSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-2.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
  });

userSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image && !this._image.match(/^http/)) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});

userSchema.pre('remove', function removeImage(next) {
  if(this.image && !this.image.match(/^http/)) {
    return s3.deleteObject({ Key: this.image }, next);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
