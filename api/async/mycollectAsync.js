const { collectUserFind, postIdFind, skillIdFind } = require("./promise")
async function main(req) {
  var colluserData = await collectUserFind({ username: req.body.username })
  var arr = []
  for (let i = 0; i < colluserData.length; i++) {
    if (colluserData[i].type == 'skill') {
      var index;
      let skillidData = await skillIdFind(colluserData[i].postId)
      for (let j = 0; j < skillidData.content.length; j++) {
        if (skillidData.content[j].id == colluserData[i].sonid) {
          index = j
        }
      }
      let postData = skillidData.content[index]
      arr[i] = {
        ...colluserData[i]._doc,
        ...postData
      }
    } else {
      let skillidData = await postIdFind(colluserData[i].postId)
      arr[i] = {
        ...colluserData[i]._doc,
        ...skillidData._doc
      }

    }
  }
  return arr
}


module.exports = main