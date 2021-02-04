
const main = require("../async/userDelAsync")
module.exports = (req,res)=>{
  main(req).then((result)=>{
    res.json(result)
  })
}