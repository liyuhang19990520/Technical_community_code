var { skillUpdata, skillIdFind, commentDel, collectRemove } = require('../../api/async/promise')
module.exports = async function (req) {
  console.log(req.query)
  var skillIdData = await skillIdFind(req.query.plate)
  var arr = [...skillIdData.content];
  arr.forEach((item, index) => {
    if (item.id == req.query.id) {
      arr.splice(index, 1)
    }
  });
  await skillUpdata({ _id: req.query.plate }, { content: arr })
  await commentDel({ postId: req.query.plate, sonid: req.query.id })
  await collectRemove({ postId: req.query.plate, sonid: req.query.id })
  return {
    code: 200,
    success: true,
    msg: "删除成功"
  }
}