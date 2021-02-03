const main = require("../async/addcommentAsync")
module.exports = (req, res) => {
  main(req).then((result) => {
    res.json(result)
  })
}