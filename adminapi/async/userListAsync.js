var { usernameFind } = require('../../api/async/promise')

module.exports = async function (req) {
  var dataNum = req.body.branchesNumber  //返回数据的数量
  var skipDataNum = (req.body.pageNumber - 1) * dataNum  //跳过数据的数量
  var userFindData = await usernameFind({}, { limit: dataNum, skip: skipDataNum }) //筛选的数据
  var userFindAllData = await usernameFind({}) //没有被筛选的数据
  // console.log(userFindData)
  return {
    list: userFindData,
    count: userFindAllData.length
  }
}