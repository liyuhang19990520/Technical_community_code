
const { postUserFind, usernameFind } = require('./promise')
module.exports = async function main(req) {
  var postUserData = await postUserFind({ postUser: req.body.username })
  var arr = []
  for(let i = 0 ; i < postUserData.length;i++){
    var usernameData = await usernameFind({username: req.body.username})
    arr[i] = {
      ...postUserData[i]._doc,
      ...usernameData[0]._doc,
      postId: postUserData[i]._id
    }
  }
  return arr

}