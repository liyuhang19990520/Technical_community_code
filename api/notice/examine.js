const main = require("../async/examineAsync")
module.exports = (req, res) => {
  main(req).then((result)=>{
    res.json(result)
  })
}