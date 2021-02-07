var { postUserFind } = require('../../api/async/promise')

module.exports = async function (req) {
  var obj = {}
  //删选掉空字符串的键值对
  for (var key in req.body.searchForm) {
    if (req.body.searchForm[key]) {
      obj[key] = req.body.searchForm[key]
    }
  }
  //如果时间有值，则范围查询时间
  if (obj.postTime && obj.postTime.length >= 2) {
    obj['postTime'] = {
      "$gte": req.body.searchForm.postTime[0],
      "$lte": req.body.searchForm.postTime[1]
    }
  }
  //如果有内容则模糊查询
  if (obj.postCont) {
    obj['postCont'] = { $regex: req.body.searchForm.postCont, $options: 'i' }
  }
  //如果有标题则模糊查询
  if (obj.postTitle) {
    obj['postTitle'] = { $regex: req.body.searchForm.postTitle, $options: 'i' }
  }

  var dataNum = req.body.branchesNumber  //返回数据的数量
  var skipDataNum = (req.body.pageNumber - 1) * dataNum  //跳过数据的数量
  var noticeFindData = await postUserFind(obj, { limit: dataNum, skip: skipDataNum }) //筛选的数据
  var noticeFindAllData = await postUserFind(obj) //没有被筛选的数据
  // console.log(userFindData)
  return {
    list: noticeFindData,
    count: noticeFindAllData.length,
  }

}