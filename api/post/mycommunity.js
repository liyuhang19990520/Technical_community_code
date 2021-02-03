var main = require("../async/mycommunAsync")
module.exports = (req, res) => {
  main(req).then((result) => {
    res.send(result)
  })
}