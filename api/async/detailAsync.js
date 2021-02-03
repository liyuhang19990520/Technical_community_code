const { skillIdFind, postIdFind, usernameFind } = require("./promise")
async function main(req) {
  if (req.query.type == 'skill') {
    var idSkillData = await skillIdFind(req.query.id)
    var usernameData;
    var index;
    for (let i = 0; i < idSkillData.content.length; i++) {
      if (req.query.sonid == idSkillData.content[i].id) {
        index = i
        usernameData = await usernameFind({ username: idSkillData.content[i].postUser })
      }
    }
    var obj = {};
    obj = {
      ...usernameData[0]._doc,
      ...idSkillData.content[index]
    }
    return obj
  } else {
    var obj = {}
    var idPostData = await postIdFind(req.query.id);
    var usernameData = await usernameFind({ username: idPostData.postUser })
    obj = {
      ...idPostData._doc,
      ...usernameData[0]._doc
    }
    return obj
  }
}

module.exports = main