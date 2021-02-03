const mongoose = require('mongoose')
const skillPostSchema = new mongoose.Schema({
  name: String,
  content: Array
});

const skillPostModel = mongoose.model('skillpost', skillPostSchema);

module.exports = skillPostModel