const mongoose = require('mongoose');

const { Schema } = mongoose;


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    type: String,
    required: true,
  },
  projects: {
    type: String,
    required: true,
  },

});



const User = mongoose.model('User', userSchema);

module.exports = User;
