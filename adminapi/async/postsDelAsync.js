var { postDel, commentDel, collectRemove } = require('../../api/async/promise')
module.exports = async function (req) {
  await postDel({_id: req.query.id}) //删除帖子
  await commentDel({postId: req.query.id}) //删除帖子对应的评论
  await collectRemove({postId: req.query.id}) //删除帖子对应的收藏
  return {
    code: 200,
    success: true,
    msg: "删除成功"
  }
}