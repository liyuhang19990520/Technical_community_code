const { postUserFind, usernameFind } = require("../async/promise")
async function main() {
  // const Arr = []
  var arr = [];
  const postAllData = await postUserFind({})

  for (let i = 0; i < postAllData.length; i++) {
    var userData = await usernameFind({ username: postAllData[i].postUser })
    arr[i] = {
      ...userData[0]._doc,
      ...postAllData[i]._doc
    }
  }
  return arr
}
module.exports = main