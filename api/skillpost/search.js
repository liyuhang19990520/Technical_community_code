const main = require("../async/searchAsync")
module.exports = (req,res)=>{
  main(req).then((result)=>{
    res.send(result)
  })
}