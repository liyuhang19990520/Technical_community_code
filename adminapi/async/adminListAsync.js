var { adminIdFind } = require('../../api/async/promise')

module.exports = async function (req) {
  return await adminIdFind(req.body.id)
}