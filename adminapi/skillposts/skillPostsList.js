
const main = require('../async/skillPostsListAsync')

module.exports = (req, res) => {
  main(req).then((result) => {
    res.json({
      msg: '操作成功',
      success: true,
      page: result,
      code: 200
    })
  })
}