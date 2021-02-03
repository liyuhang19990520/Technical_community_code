const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
  postUser: String,
  postTitle: String,
  postCont: String,
  postContImg: Array,
  postTime: {
    type: Date,
    default: Date.now
  }
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel