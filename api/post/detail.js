const main = require("../async/detailAsync")
module.exports = (req, res) => {
  main(req).then((result) => {
    res.send(result)
  })
}