var { postIdFind } = require('../../api/async/promise')

module.exports = async function (req) {
  return await postIdFind(req.query.id)
}