const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  bio: String,
  profilePicture: String,
  followedBy: [{
    type: mongoose.Schema.ObjectId, ref: 'User'
  }]
});

userSchema.virtual('artworkAdded', {
  ref: 'Artwork',
  localField: '_id',
  foreignField: 'createdBy'
});

userSchema.plugin(require('mongoose-unique-validator'));

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password;
    return json;
  }
});

userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function(attemptedPassword) {
  return bcrypt.compareSync(attemptedPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
