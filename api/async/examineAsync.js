const { noticeUpdata, noticeIdFind, noticeFind } = require("./promise")
async function main(req) {
  if (req.body.type == 'minute') {
    var noticeidData = await noticeIdFind(req.body.id)
    var arr = [...noticeidData.haveToSeeArr]
    if (!arr.includes(req.body.username)) {
      arr.push(req.body.username)
    }
    await noticeUpdata({ _id: req.body.id }, { haveToSeeArr: arr })
    return {
      success: true
    }
  } else {
    var noticefindData = await noticeFind({})
    var num = 0
    noticefindData.forEach(element => {
      if (!element.haveToSeeArr.includes(req.body.username)) {
        num++
      }
    });
    return {
      success: true,
      num
    }

  }
}
module.exports = main