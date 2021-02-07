
const main = require('../async/commentDetailAsync')
module.exports = (req, res) => {
  main(req).then((result) => {
    res.send({
      msg: '操作成功',
      success: true,
      information: result,
      code: 200
    })
  })
}