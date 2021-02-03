var { commentUserFind, usernameFind } = require("./promise");
async function main(req) {
  var arr = []
  if (req.query.type == 'skill') {
    var commentFindData = await commentUserFind({ postId: req.query.id, sonid: req.query.sonid, type: req.query.type })
  } else {
    var commentFindData = await commentUserFind({ postId: req.query.id, type: req.query.type })
  }
  for (let i = 0; i < commentFindData.length; i++) {
    var userFindData = await usernameFind({ username: commentFindData[i].username })
    arr[i] = {
      ...userFindData[0]._doc,
      ...commentFindData[i]._doc
    }
  }
  return arr
}

module.exports = main