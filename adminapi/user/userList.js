const main = require("../async/userListAsync")
module.exports = (req,res)=>{
  main(req).then((result)=>{
    res.json({
      msg: '操作成功',
      success: true,
      page: result,
      code: 200
    })
  })
}