var { adminUpdata } = require('../../api/async/promise')
module.exports = async function (req) {
  console.log(req.body)
  var obj = {}
  //删选掉空字符串的键值对
  for (var key in req.body) {
    if (req.body[key]) {
      obj[key] = req.body[key]
    }
  }
  await adminUpdata({ _id: obj._id }, obj)
  return {
    msg: '修改成功',
    success: true,
    code: 200
  }

}