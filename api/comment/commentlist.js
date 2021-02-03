const main = require("../async/comlistAsync")

module.exports = (req, res) => {
  main(req).then((result)=>{
    res.json(result)
  })
}