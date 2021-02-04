const { commentAdd, postIdFind, skillIdFind } = require("./promise")
async function main(req) {
  var postUser;
  if (req.body.type == 'post') {
    var postIdData = await postIdFind(req.body.id)
    postUser = postIdData.postUser
  } else {
    var postIdData = await skillIdFind(req.body.id)
    postIdData.content.forEach(element => {
      if (element.id == req.body.sonid) {
        postUser = element.postUser
      }
    });
  }

  await commentAdd({
    cont: req.body.cont,
    postId: req.body.id,
    sonid: req.body.sonid,
    type: req.body.type,
    username: req.body.username,
    postUser
  })
  return 1
}
module.exports = main
