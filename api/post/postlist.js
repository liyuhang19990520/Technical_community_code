const main = require("../async/postlistAsync")
module.exports = (req, res) => {
  main().then((result)=>{
    res.send(result)
  })
}