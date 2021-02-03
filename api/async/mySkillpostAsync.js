const { skillUserFind, usernameFind } = require("./promise")
async function main(req) {
  var skillData = await skillUserFind({})
  var usernameData = await usernameFind(req.body)
  var arr = []
  for (let i = 0; i < skillData.length; i++) {
    for (let j = 0; j < skillData[i].content.length; j++) {
      if (skillData[i].content[j].postUser == req.body.username) {
        arr.push({
          ...usernameData[0]._doc,
          ...skillData[i].content[j],
          postid: skillData[i]._id,
          sonid: skillData[i].content[j].id
        })
      }
    }
  }

  // console.log(arr)
  return arr
}

module.exports = main