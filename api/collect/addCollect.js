var main = require('../async/addcollectAsync')
module.exports = (req, res) => {
  main(req).then((result) => {
    if (result.code == 1) {
      res.json({
        code: 1,
        message: '收藏成功',
        information: result.arr
      })
    } else if (result.code == 0) {
      res.json({
        code: 0,
        message: '取消收藏',
        information: result.arr
      })
    } else {
      res.json({
        ...result
      })
    }
  })
}