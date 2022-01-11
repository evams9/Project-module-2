const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    trim: true,
    required: [true, 'username is required'],
    unique: true,
  },


  email: {
    type: String,
    required: [true, 'email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    unique: true,
    lowercase: true,
    trim: true
  },
  hashedPassword: {
    type: String,
    required: [true, 'password is required'],
    unique:true,
    trim: true,
  }
},
{
    timestamps: true

  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
