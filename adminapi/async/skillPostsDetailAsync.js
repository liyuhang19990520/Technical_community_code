var { skillIdFind } = require('../../api/async/promise')

module.exports = async function (req) {
  var skillidData = await skillIdFind(req.query.plate)
  var obj = (skillidData.content.filter((item)=>item.id == req.query.id))[0]
  obj._id = obj.id
  obj.plate = req.query.plate
  delete obj.id
  return obj
}