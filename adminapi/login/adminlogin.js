
const main = require("../async/adminLoginAsync")
module.exports = (req, res) => {
  main(req).then((result) => {
    res.send(result)
  }, () => {
    res.json("登录失败")
  })

}