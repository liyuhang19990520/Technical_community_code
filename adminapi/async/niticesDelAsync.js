var { noticeRemove } = require('../../api/async/promise')
module.exports = async function (req) {
  await noticeRemove(req.query)
  return {
    code: 200,
    success: true,
    msg: "删除成功"
  }
}