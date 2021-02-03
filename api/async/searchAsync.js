const { skillUserFind, usernameFind } = require("./promise")
async function main(req) {
  var arr = [];

  var skillData = await skillUserFind({})
  if (req.query.value == "") {
    for (let i = 0; i < skillData.length; i++) {
      var newArr = [];
      for (let j = 0; j < skillData[i].content.length; j++) {
        var userData = await usernameFind({ username: skillData[i].content[j].postUser })
        newArr.push(userData[0])
        arr[i] = {
          ...skillData[i]._doc,
          user: newArr
        }
      }
    }
  } else {
    
    var arr = []
    for (let i = 0; i < skillData.length; i++) {
      var newArr = [];
      var contArr = [];
      for (let j = 0; j < skillData[i].content.length; j++) {
        if (skillData[i].content[j].postTitle.indexOf(req.query.value) != -1) {
          contArr.push(skillData[i].content[j])
          var userData = await usernameFind({ username: skillData[i].content[j].postUser })
          newArr.push(userData[0])
        }
        arr[i] = {
          ...skillData[i]._doc,
          user: newArr
        }
        arr[i].content = contArr
      }
    }
  }
  return arr
}


module.exports = main