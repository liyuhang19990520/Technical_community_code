
const main = require("../../api/async/registerAsync")
module.exports = (req, res) => {
  main(req).then((result) => {
    if (result == 1) {
      res.json({
        code: 1,
        message: '注册成功'
      })
    } else {
      res.json({
        code: 0,
        message: '账号已存在'
      })
    }
  }, () => {
    res.json('注册失败')
  })
}

