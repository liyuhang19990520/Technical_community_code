const mongoose = require('mongoose')
const noticeSchema = new mongoose.Schema({
  cont: String,
  time: {
    type: Date,
    default: Date.now
  },
  haveToSeeArr: Array
});

const noticeModel = mongoose.model('notice', noticeSchema);

module.exports = noticeModel