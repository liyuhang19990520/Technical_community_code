var { collectAdd, collectUserFind, collectRemove, postIdFind, skillIdFind } = require('../async/promise')

async function main(req) {
  //分两种情况，技术博客和社区帖子，一个有index一个没有
  var postUser;
  if (req.query.type == 'skill') {
    var postIdData = await skillIdFind(req.query.id)
    postIdData.content.forEach(element => {
      if (element.id == req.query.sonid) {
        postUser = element.postUser
      }
    });

    var obj = {
      postId: req.query.id,
      sonid: req.query.sonid,
      type: req.query.type,
      username: req.query.username,
      postUser
    }
    var newObj = {
      postId: req.query.id,
      sonid: req.query.sonid,
      type: req.query.type
    }
  } else {
    var postIdData = await postIdFind(req.query.id)
    postUser = postIdData.postUser
    var obj = {
      postId: req.query.id,
      type: req.query.type,
      username: req.query.username,
      postUser
    }
    var newObj = {
      postId: req.query.id,
      type: req.query.type
    }
  }
  //查询在线账号是否收藏过这个帖子
  var collectUserData = await collectUserFind({
    ...obj
  });
  //如果类型为添加收藏则添加删除操作
  if (req.query.mode == 'add') {
    if (collectUserData.length <= 0) {
      await collectAdd({
        ...obj
      })
      return {
        code: 1,
        arr: collectUserData
      }
    } else {
      await collectRemove({
        ...obj
      })
      return {
        code: 0,
        arr: collectUserData
      }
    }
    //如果是查询列表则返回是否收藏和收藏的账号个数
  } else {
    var data = await collectUserFind({
      ...newObj
    })
    if (collectUserData.length <= 0) {
      return {
        code: 2,
        arr: data,
        boo: false
      }
    } else {
      return {
        code: 2,
        arr: data,
        boo: true
      }
    }

  }
}

module.exports = main