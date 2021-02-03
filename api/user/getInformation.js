const main = require("../async/getInformationAsync")
module.exports = (req,res)=>{
  main(req).then((result)=>{
    res.send(result)
  })
}