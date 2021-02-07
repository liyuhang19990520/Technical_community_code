var { commentIdFind } = require('../../api/async/promise')

module.exports = async function (req) {
  return await commentIdFind(req.query.id)
}