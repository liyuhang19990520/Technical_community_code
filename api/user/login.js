
const main = require("../async/loginAsync")
module.exports = (req, res) => {
  main(req).then((result) => {
    if (result.code == 0) {
      res.json({
        code: 0,
        message: '用户不存在，请注册'
      })
    } else if (result.code == 1) {
      res.json({
        code: 1,
        message: '登陆成功',
        information: result.information
      })
    } else {
      res.json({
        code: 2,
        message: '密码错误'
      })
    }
  }, () => {
    res.json("登录失败")
  })

}