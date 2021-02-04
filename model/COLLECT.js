const mongoose = require('mongoose')
const collectSchema = new mongoose.Schema({
  postId: String,
  sonid: String,
  type: String,
  username: String,
  postUser: String
});

const collectModel = mongoose.model('collect', collectSchema);

module.exports = collectModel