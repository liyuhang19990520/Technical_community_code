var { skillUpdata, skillIdFind } = require('../../api/async/promise')
module.exports = async function (req) {
  var skillIdData = await skillIdFind(req.body.oldPlate)
  var skillIdNewData = await skillIdFind(req.body.plate)
  var cont = [...skillIdData.content]
  var newCont = [...skillIdNewData.content]
  cont.forEach((item, index) => {
    if (item.id == req.body.id) {
      cont.splice(index, 1)
      newCont.push(item)
    }
  });
  await skillUpdata({ _id: req.body.oldPlate }, { content: cont })
  await skillUpdata({ _id: req.body.plate }, { content: newCont })

  return {
    msg: '修改成功',
    success: true,
    code: 200
  }
}