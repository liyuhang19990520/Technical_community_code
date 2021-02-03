const main = require("../async/mySkillpostAsync")
module.exports = (req,res)=>{
  main(req).then((result)=>{
    res.json(result)
  })
}