var { noticeUpdata, noticeAdd } = require('../../api/async/promise')
module.exports = async function (req) {
  if (req.body._id) {
    await noticeUpdata({ _id: req.body._id }, req.body)
    return {
      msg: '修改成功',
      success: true,
      code: 200
    }
  } else {
    var obj = req.body
    delete obj._id
    await noticeAdd(obj)
    return {
      msg: '添加成功',
      success: true,
      code: 200
    }

  }
}