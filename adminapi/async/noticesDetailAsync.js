var { noticeIdFind } = require('../../api/async/promise')

module.exports = async function (req) {
  return await noticeIdFind(req.query.id)
}