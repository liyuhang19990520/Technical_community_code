const {userUpdata} = require("./promise")
async function main(req){
  await userUpdata({
    username: req.body.username
  },req.body)
  return "修改成功"
}
module.exports = main