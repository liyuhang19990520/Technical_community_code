const { commentUserFind, skillIdFind, postIdFind, usernameFind } = require("./promise")
async function main(req) {
  var commentuserData = await commentUserFind({ username: req.body.username })
  var arr = []
  
  // console.log(commentuserData)
  for (let i = 0; i < commentuserData.length; i++) {
    var obj = {}
    obj.comments = {
      ...commentuserData[i]._doc
    }
    if (commentuserData[i].type == 'skill') {
      //技术社区
      var postidData = await skillIdFind(commentuserData[i].postId)
      for (let j = 0; j < postidData.content.length; j++) {
        if(postidData.content[j].id == commentuserData[i].sonid){
          obj.postdata = {
            ...postidData.content[j]
          }
        }
      }
    } else {
      //社交社区
      var postidData = await postIdFind(commentuserData[i].postId)
      obj.postdata = {
        ...postidData._doc
      }
    }
    arr.push(obj)
  }


  return arr
  // console.log(commentuserData)
}
module.exports = main
// obj = {
//   postdata: {
//     ...skillidData.content[j]
//   },
//   postuser: {
//     ...userData[0]._doc
//   },
//   comments: {
//     ...commentuserData[0]._doc
//   }
