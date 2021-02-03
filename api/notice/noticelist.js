const main = require("../async/noticelistAsync")
module.exports = (req, res) => {
  main(req).then((result)=>{
    res.json(result)
  })
}