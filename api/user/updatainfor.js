const main = require("../async/updatainforAsync")
module.exports = (req, res) => {
  main(req).then((result) => {
    res.send(result)
  })
}