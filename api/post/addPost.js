
const main = require("../async/addPostAsync")
module.exports = (req, res) => {
  main(req).then((result) => {
    if (result == 1) {
      res.send({
        code: 1,
        message: '发表成功'
      })
    } else {
      res.send({
        code: 0,
        message: '发表失败'
      })
    }
  })
}