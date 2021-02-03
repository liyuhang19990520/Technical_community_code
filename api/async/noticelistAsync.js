const { noticeFind } = require("./promise")
async function main(req) {
  var noticeuserData = await noticeFind({})
  return {
    success: true,
    list: [
      ...noticeuserData
    ]
  }
}
module.exports = main
