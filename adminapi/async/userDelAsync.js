var { userDel, postDel, commentDel, collectRemove, skillUserFind, skillUpdata, noticeFind, noticeUpdata } = require('../../api/async/promise')

module.exports = async function (req) {
  console.log(req.query)
  await userDel(req.query) //删除用户表信息
  await postDel({ postUser: req.query.username }) //删除社交帖子信息
  await commentDel(req.query) //删除评论信息
  await commentDel({ postUser: req.query.username }) //删除别人收藏他的帖子的信息
  await collectRemove(req.query) //删除收藏信息
  await collectRemove({ postUser: req.query.username }) //删除别人收藏他信息
  var skillUserData = await skillUserFind({})
  for (let i = 0; i < skillUserData.length; i++) {
    let arr = [...skillUserData[i].content]
    let newArr = arr.filter(item => item.postUser != req.query.username)//过滤掉删除的账号
    await skillUpdata({ _id: skillUserData[i]._id }, { content: newArr })
  }
  var noticeUserData = await noticeFind({})
  for (let i = 0; i < noticeUserData.length; i++) {
    let arr = [...noticeUserData[i].haveToSeeArr]
    let newArr = arr.filter(item => item != req.query.username)
    await noticeUpdata({ _id: noticeUserData[i]._id }, { haveToSeeArr: newArr })
  }

  return {
    success: true,
    msg: '删除成功',
    code: 200
  }
}