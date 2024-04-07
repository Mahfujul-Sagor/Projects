const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/something');

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  catagories: {
    type: Array,
    default: [],
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('user', userSchema);