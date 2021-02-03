
var main = require('../async/mycollectAsync')
module.exports = (req, res) => {
  main(req).then((result) => {
    res.json(result)
  })
}