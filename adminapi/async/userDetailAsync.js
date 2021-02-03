var { userIdFind } = require('../../api/async/promise')

module.exports = async function(req){
  return await userIdFind(req.query.id)
}