var { usernameFind } = require('../../api/async/promise')

module.exports = async function (req) {
  // console.log(req.body)
  var obj = {}
  for (var key in req.body.searchForm) {
    if (req.body.searchForm[key]) {
      obj[key] = req.body.searchForm[key]
    }
  }
  var dataNum = req.body.branchesNumber  //返回数据的数量
  var skipDataNum = (req.body.pageNumber - 1) * dataNum  //跳过数据的数量
  var userFindData = await usernameFind(obj, { limit: dataNum, skip: skipDataNum }) //筛选的数据
  var userFindAllData = await usernameFind(obj) //没有被筛选的数据
  // console.log(userFindData)
  return {
    list: userFindData,
    count: userFindAllData.length
  }
}