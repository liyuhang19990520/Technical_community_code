const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
  postId: String,
  sonid: String,
  type: String,
  username: String,
  cont: String,
  postUser: String,
  time: {
    type: Date,
    default: Date.now
  }
});

const commentModel = mongoose.model('comment', commentSchema);

module.exports = commentModel