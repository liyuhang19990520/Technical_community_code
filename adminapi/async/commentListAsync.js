var { commentUserFind } = require('../../api/async/promise')

module.exports = async function (req) {
  var obj = {}
  //删选掉空字符串的键值对
  for (var key in req.body.searchForm) {
    if (req.body.searchForm[key]) {
      obj[key] = req.body.searchForm[key]
    }
  }
  //如果时间有值，则范围查询时间
  if (obj.time && obj.time.length >= 2) {
    obj['time'] = {
      "$gte": req.body.searchForm.time[0],
      "$lte": req.body.searchForm.time[1]
    }
  }
  //如果有内容则模糊查询
  if (obj.cont) {
    obj['cont'] = { $regex: req.body.searchForm.cont, $options: 'i' }
  }

  var dataNum = req.body.branchesNumber  //返回数据的数量
  var skipDataNum = (req.body.pageNumber - 1) * dataNum  //跳过数据的数量
  var noticeFindData = await commentUserFind(obj, { limit: dataNum, skip: skipDataNum }) //筛选的数据
  var noticeFindAllData = await commentUserFind(obj) //没有被筛选的数据
  // console.log(userFindData)
  return {
    list: noticeFindData,
    count: noticeFindAllData.length,
  }

}