const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
  username: String,
  nickname: String,
  password: String,
  sex: String,
  birth: String,
  headImg: {
    type: String,
    default: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2395693894,1549853405&fm=26&gp=0.jpg"
  }
});
const adminModel = mongoose.model('admin', adminSchema);

module.exports = adminModel