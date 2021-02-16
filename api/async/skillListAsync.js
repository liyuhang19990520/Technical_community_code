const { skillUserFind, usernameFind } = require("../async/promise")
async function main() {
  // const Arr = []
  var arr = [];
  const skillAllData = await skillUserFind({})
  console.log(skillAllData)
  for (let i = 0; i < skillAllData.length; i++) {
    var newArr = [];
    for (let j = 0; j < skillAllData[i].content.length; j++) {
      var userData = await usernameFind({ username: skillAllData[i].content[j].postUser })
      newArr.push(userData[0])
      arr[i] = {
        ...skillAllData[i]._doc,
        user: newArr
      }
    }
  }
  return arr
}
module.exports = main