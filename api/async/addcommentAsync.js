const { commentAdd } = require("./promise")
async function main(req) {
  await commentAdd({
    cont: req.body.cont,
    postId: req.body.id,
    sonid: req.body.sonid,
    type: req.body.type,
    username: req.body.username
  })
  return 1
}
module.exports = main
