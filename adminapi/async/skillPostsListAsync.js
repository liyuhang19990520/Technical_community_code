var { skillUserFind } = require('../../api/async/promise')

module.exports = async function (req) {
  console.log(req.body)
  // var obj = {}
  // //删选掉空字符串的键值对
  // for (var key in req.body.searchForm) {
  //   if (req.body.searchForm[key]) {
  //     obj[key] = req.body.searchForm[key]
  //   }
  // }
  // //如果时间有值，则范围查询时间
  // if (obj.postTime && obj.postTime.length >= 2) {
  //   obj['postTime'] = {
  //     "$gte": req.body.searchForm.postTime[0],
  //     "$lte": req.body.searchForm.postTime[1]
  //   }
  // }
  // //如果有内容则模糊查询
  // if (obj.postCont) {
  //   obj['postCont'] = { $regex: req.body.searchForm.postCont, $options: 'i' }
  // }
  // //如果有标题则模糊查询
  // if (obj.postTitle) {
  //   obj['postTitle'] = { $regex: req.body.searchForm.postTitle, $options: 'i' }
  // }
  var arr = []
  var newArr = []
  var dataNum = req.body.branchesNumber * req.body.pageNumber //截取数组的末位置
  var skipDataNum = (req.body.pageNumber - 1) * req.body.branchesNumber  //截取数组的前位置
  
  var noticeFindAllData = await skillUserFind({}) //没有被筛选的数据
  // console.log(noticeFindAllData)
  for (let i = 0; i < noticeFindAllData.length; i++) {

    arr = arr.concat(noticeFindAllData[i].content.map((item) => {
      item.plate = {
        id: noticeFindAllData[i]._id,
        name: noticeFindAllData[i].name
      }
      return item
    }))

  }
  newArr = arr.map((item) => item)
  if(dataNum >= newArr.length){
    dataNum = newArr.length 
  }
  return {
    list: newArr.slice(skipDataNum, dataNum),
    count: arr.length,
  }

}