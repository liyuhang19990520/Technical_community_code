
const main = require('../async/niticesDelAsync')
module.exports = (req, res) => {
  main(req).then((result) => {
    res.json(result)
  })
}