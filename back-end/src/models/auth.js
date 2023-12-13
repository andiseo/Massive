// models/User.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Ideally, password should be hashed before saving to the database
});

const User = mongoose.model('users', userSchema);
module.exports = User;
