const mongoose = require('mongoose');
const s3 = require('../lib/s3');

const nonprofitSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String, trim: true },
  registration: { type: String, required: true },
  // createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  address: { type: String, required: true },
  website: { type: String, required: true },
  email: String,
  location: { lat: Number, lng: Number },
  skills: [{ type: mongoose.Schema.ObjectId, ref: 'Skill' }],
  supporters: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
},
{
  timestamps: true
});

nonprofitSchema
  .path('image')
  .set(function getPreviousImage(image) {
    this._image = this.image;
    return image;
  });

nonprofitSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-2.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
  });

nonprofitSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image && !this._image.match(/^http/)) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});

nonprofitSchema.pre('remove', function removeImage(next) {
  if(this.image && !this.image.match(/^http/)) {
    return s3.deleteObject({ Key: this.image }, next);
  }
  next();
});
module.exports = mongoose.model('Nonprofit', nonprofitSchema);
