var { commentDel } = require('../../api/async/promise')
module.exports = async function (req) {
  await commentDel(req.query)
  return {
    code: 200,
    success: true,
    msg: "删除成功"
  }
}