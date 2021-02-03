var uuid = require('node-uuid');
const { skillUpdata, postAdd, skillUserFind } = require("./promise")
const SKILLPOST = require('../../model/SKILLPOST')
async function main(req) {
  if (req.body.type == "post") {
    await postAdd({
      postTitle: req.body.postTitle,
      postCont: req.body.postCont,
      postUser: req.body.postUser,
      postContImg: req.body.postContImg
    })
    return 1
  } else if (req.body.type == "skill") {
    var data = await skillUserFind({ name: req.body.name })
    var arr = [...data[0].content]
    arr.push({
      id: uuid.v1().replace(/-/g, ""),
      postTitle: req.body.postTitle,
      postCont: req.body.postCont,
      postUser: req.body.postUser,
      postContImg: req.body.postContImg,
      postTime: new Date
    })
    await skillUpdata({
      name: req.body.name
    }, {
      content: arr
    })
    return 1
  }else{
    return 0
  }
}
module.exports = main