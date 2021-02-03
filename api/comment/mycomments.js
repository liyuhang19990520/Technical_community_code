const main = require("../async/mycommentsAsync")

module.exports = (req, res) => {
  main(req).then((result) => {
    res.json(result)
  })
}