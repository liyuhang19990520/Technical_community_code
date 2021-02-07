const { adminNameFind } = require("../../api/async/promise")
async function main(req) {
  const userMessage = await adminNameFind({ username: req.body.username })
  if (userMessage.length <= 0) {
    return {
      code: 200,
      success: false,
      msg: '没有此管理账号'
    }
  } else {
    if (userMessage[0].password == req.body.pass) {
      return {
        code: 200,
        success: true,
        msg: '登陆成功',
        information: userMessage[0]
      }
    } else {
      return {
        code: 200,
        success: false,
        msg: '登陆失败'
      }
    }
  }
}

module.exports = main